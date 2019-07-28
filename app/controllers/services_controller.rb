class ServicesController < ApplicationController

  def index

  end

  def show
    if params[:id] == "2"
      @service = Service.find(params[:id])
    else
      redirect_to root_path
    end
  end

end
