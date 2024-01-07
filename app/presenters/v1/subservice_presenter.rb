module V1
  class SubservicePresenter < V1::BasePresenter

    def get_sidebar_label_name
      case @model.name
      when  "Claims, Disputes, Compensation, and Litigation"
        "Claims, Disputes, Compensation, Courts and Litigation"
      else
        @model.name
      end
    end

    def get_additional_sublabel_classes(current_subservice)
      return "menu-item" if current_subservice && @model.name != current_subservice.name
      "current-menu-item menu-item"
    end
  end
end
