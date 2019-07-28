class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  around_action :catch_not_found

  private
  
    def catch_not_found
      yield
    rescue ActiveRecord::RecordNotFound
      redirect_to root_path, :flash => { :error => "Record not found." }
    end
end
