module V1
  class BasePresenter < SimpleDelegator
    include Rails.application.routes.url_helpers

    def initialize(model)
      @model = model
    end
  end
end
