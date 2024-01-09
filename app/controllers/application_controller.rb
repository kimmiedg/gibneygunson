class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  around_action :catch_not_found
  before_action :set_services

  private

    def set_services
      @services = Service.all
      @services = Service.limit(5) if @services.count > 5
      @services
    end

    def catch_not_found
      yield
    rescue ActiveRecord::RecordNotFound
      redirect_to root_path, :flash => { :error => "Record not found." }
    end
end
