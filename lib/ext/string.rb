class String

  def ampersand_to_s
    self.gsub('&', 'and')
  end

  def space_to_underscore
    self.gsub(' ', '_')
  end
end
