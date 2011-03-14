#!/usr/bin/perl

use strict;
use warnings;
use Data::Dumper;
use JSON::Any;

=head1 NAME

perltidy - a perl script indenter and reformatter

=head1 SYNOPSIS

  $ head census.data
  SMITH          1.006
  JOHNSON        0.810
  WILLIAMS       0.699
  JONES          0.621
  BROWN          0.621
  DAVIS          0.480
  MILLER         0.424
  WILSON         0.339
  MOORE          0.312
  TAYLOR         0.311
  $ perl gen_stats.pl < census.data

=head1 DESCRIPTION

gen_stats.pl will take census data and generate some basic stats about the data
it contains.  It then uses JSON::Any to output JSON of the stats.

The census data needs two columns.  First, the name itself, then the percent
of the population with that name.  Names cannot contain numbers.

The percent of population is used to not include names in < 0.001% of the
population.

The stats that it produces is:

For every syllable found, it lists all the syllables that follows it as well
as if the syllable was found at the start or end of a name.

=cut

my %stats;

while ( my $line = <> )
{
  my ( $name, $percent ) = $line =~ m/^([\w\s]*)(\d+[.]\d+).*$/xms;

  next if $percent < 0.001;

  my @set;

  $name = lc $name;

  $name =~ m/^\s*/xmsigc;
  while ( pos $name < length $name )
  {
    if ( $name =~ m/\G([aeiou]*)/xmsigc )
    {
      push @set, $1;
    }
    elsif ( $name =~ m/\G([^aeiou\s]*)/xmsigc )
    {
      push @set, $1;
    }
    else
    {
      die "$name is strange";
    }
    $name =~ m/\G\s*/xmsigc;
  }

  foreach my $set_num ( 0 .. $#set )
  {
    my $group = $set[$set_num];

    if ( !exists $stats{$group} )
    {
      $stats{$group} = {
        can_start => 0,
        can_end   => JSON::Any::false,
        follows   => [],
      };
    }

    my $stat = $stats{$group};

    if ( $set_num == 0 )
    {
      $stat->{can_start} += 1;
    }
    if ( $set_num == $#set )
    {
      $stat->{can_end} += 1;
    }
    else
    {
      push @{ $stat->{follows} }, $set[ $set_num + 1 ];
    }
  }
}

# Process the follows into a more compact format

foreach my $key ( keys %stats )
{
  my %follows;
  foreach my $group ( @{ $stats{$key}->{follows} } )
  {
    $follows{$group} += 1;
  }
  $stats{$key}->{follows} = \%follows;
}

# Produce the JSON output

my $output = {};
foreach my $key ( keys %stats )
{
  my $group = $stats{$key};
  $output->{$key} = {
    s => $group->{can_start} > 10 ? JSON::Any::true : JSON::Any::false,
    e => $group->{can_end} > 1    ? JSON::Any::true : JSON::Any::false,
    f => $group->{follows},
  };
}

my $json = JSON::Any->objToJson($output);
$json =~ s/e},"/e},\n"/g;
print $json;
