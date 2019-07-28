class SubservicesController < ApplicationController
  include SubserviceHelper
  
  def show
    @subservice = Subservice.find(params[:id])
  end

end
