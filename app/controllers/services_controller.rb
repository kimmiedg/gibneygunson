class ServicesController < ApplicationController
  before_action :set_service, only: [:show]
  before_action :set_services, only: [:show, :other_claims_litigation]
  before_action :set_service_name, only: [:show, :other_claims_litigation]

  def index

  end

  def show
    redirect_to root_path unless @service.present?
  end

  def other_claims_litigation
    @service = Service.first
    @subservice = @service.subservices.find_by(name: 'Other claims')
  end

  private

    def set_service
      @service = Service.find(params[:id])
    end

    def convert_to_partial_name
      return unless @service
      @service.downcase
    end

    def set_services
      services = Service.all
      @services = services.count > 5 ? Service.limit(5) : services
      @services
    end

    def set_service_name
      @service_name = @service.name.downcase.underscore.gsub(' ', '_').gsub('&', 'and') if @service
    end

end
