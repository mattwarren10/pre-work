

class Dictionary
	def initialize(dictionary)
		@dictionary = dictionary
	end

	def load
		word = []
		word = File.read(@dictionary).lines.select {|l| (5..12).cover?(l.strip.size)}.sample.strip
		word
	end
end

class Player
	attr_accessor :name
	def initialize (name)
		@name = name
	end
end

class Game
	def initialize(set_word)
		@players = []
		@set_word = set_word

	end

	def add_player(p)
		@players.push(p)
	end

	def compare
		puts "Guess a word"
		guess = gets.chomp
		if @set_word == guess
			puts "Congratulations you guessed correctly!"
		else
			puts "Try again."
			guess = gets.chomp
			if @set_word == guess
				puts "Congratulations you guessed correctly!"
			else
				puts "Try again."
				guess = gets.chomp
				if @set_word == guess
					puts "Congratulations you guessed correctly!"
				else
					puts "Try again."
					guess = gets.chomp
					if @set_word == guess
						puts "Congratulations you guessed correctly!"
					else
						puts "Try again."
						guess = gets.chomp
						if @set_word == guess
							puts "Congratulations you guessed correctly!"
						else
							puts "Try again."
							guess = gets.chomp
							if @set_word == guess
								puts "Congratulations you guessed correctly!"
							else
								puts "Sorry. Game Over. The correct word was " + @set_word
							end
						end
					end
				end
			end
		end
	end
end

dictionary = Dictionary.new('ActionWords(114).txt')
new_game = Game.new(dictionary.load)
player_1 = Player.new("Matt")
player_2 = Player.new("Pat")
new_game.add_player(player_1)
new_game.add_player(player_2)

new_game.compare


dictionary.load