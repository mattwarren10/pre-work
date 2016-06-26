class Player
	attr_reader :player_name, :set_word, :player_guess
	def initialize (player_name)
		@player_name = player_name
	end

	def set_word
		@set_word = gets.chomp
	end

	def guess
		@player_guess = gets.chomp 
	end
end

class Game
	def players
		@players = []
	end
	def guesses_left
		@guesses = 6
	end
	def compare
		if @player_guess == @set_word
			print "Congratulations! You guessed correctly!"
		elsif @player_guess != @set_word
			@guesses--			
		end
	end

end