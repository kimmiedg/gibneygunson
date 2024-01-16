module V1
  class ServicePresenter < V1::BasePresenter

    def is_claims_and_litigation
      @model.name == 'Claims & Litigation'
    end

    def get_additional_classes(current_service)
      return 'menu-item' unless current_service == @model.name
      'menu-item menu-item-has-children current-menu-ancestor'
    end

    def is_current_service_active(current_service)
      current_service.id == @model.id
    end

    def get_service_title
      case @model.name
      when 'Property Law & Conveyancing'
        'Property'
      when 'Business Law'
        'Business'
      else
        @model.name
      end
    end

  end
end
