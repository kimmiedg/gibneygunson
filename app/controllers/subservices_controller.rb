class SubservicesController < ApplicationController
  include SubserviceHelper

  def show
    @subservice = Subservice.find(params[:id])
    @service = @subservice.service
    @services = services
  end

  private
    def services
      services = Service.all
      return services unless services.count > 5
      Service.limit(5)
    end

end
