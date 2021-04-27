class PagesController < ApplicationController
  def benevoles
    @volunteers = Volunteer.where(anon: false).order(sort_name: :asc) + Volunteer.where(anon: true).order(sort_name: :asc)
  end

  def donateurs
    ulule_project_slug = "cocktail-truck-zesty-compagnie-"
    ulule_service = UluleService.new(ulule_project_slug)
    @ulule_project = ulule_service.project
    @ulule_donors = ulule_service.supporters
  end

  def contact
    @contact_items = FaqItem.where(category: "Collaboration et contact")
  end

  def presse
  end

  def mentions_legales
  end

  def privacy
  end

  def algorithme
    @faq_item = FaqItem.find_by(title: "Comment fonctionne la sélection des volontaires ?")
  end

  def faq
    @faq_items = FaqItem.where(area: "main")
  end

  def faq_pro
    @faq_items = FaqItem.where(area: "pro")
  end

  def robots
    render "pages/robots", layout: false, content_type: "text/plain"
  end

  StaticPage.all.each do |page|
    define_method page.slug.underscore do
      @body = page.body
      render "pages/static"
    end
  end

  private

  def skip_pundit?
    true
  end
end
