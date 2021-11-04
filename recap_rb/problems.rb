# require "byebug"

class NBAPlayer
    attr_reader :name, :team, :pos
    # debugger
    def initialize(name, team, pos)
        @name = name
        @team = team
        @pos = pos       
    end


end 

curry = NBAPlayer.new("curry", "gsw", "pg")

puts curry.name