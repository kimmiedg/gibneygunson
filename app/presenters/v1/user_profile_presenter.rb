module V1
  class UserProfilePresenter < V1::BasePresenter
    def img_src
      src = 'assets/team-placeholder.jpg'
      case @model.name
      when 'Paul Gibney'
        src = '/assets/paul_gibney.png'
      end
      src
    end
  end
end
