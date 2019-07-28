module SubserviceHelper

  def get_partial_name(name)
    return name.parameterize.underscore
  end
end
