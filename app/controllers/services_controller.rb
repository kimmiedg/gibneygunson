class ServicesController < ApplicationController
  before_action :set_service, only: [:show]

  def index

  end

  def show
    @service_name = @service.name.downcase.underscore.gsub(' ', '_').gsub('&', 'and') if @service
    @services = services
    redirect_to root_path unless @service.present?
  end

  private

    def set_service
      @service = Service.find(params[:id])
    end

    def convert_to_partial_name
      return unless @service
      @service.downcase
    end

    def services
      services = Service.all
      return services unless services.count > 5
      Service.limit(5)
    end

end
