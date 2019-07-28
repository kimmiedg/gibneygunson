services =[{name: "Claims & Litigation", subservices: ["Claims, Disputes, Compensation, and Litigation","Superannuation Disability Claims"]},
          {name: "Family Law", subservices: []},
          {name: "Property Law & Conveyancing", subservices: ["Our Conveyancing Team", "Conveyancing Quote – New South Wales",
            "Conveyancing Quote – Victoria","Leases", "Property Development"]},
          {name: "Business Law", subservices: ["Sales and Purchases of Businesses","Leases", "Business Law, including Business Disputes",
            "Liquor Licensing", "Farm Sales and Purchases", "Property Development"]},
          {name: "Wills & Estates", subservices: ["Estate Planning Price List","Wills, Financial Powers of Attorney, and Medical Powers of Attorney",
            "Your Will & Superannuation","Planning For Your Digital Assets", "Deceased Estates Administration", "Family Provision Claims – New South Wales",
            "Family Provision Claims – Victoria"]}]

services.each do |service|
  s = Service.create(name: service[:name])
  service[:subservices].map{|sub| Subservice.create(name: sub, service_id: s.id)} if service[:subservices].present?
  puts "#{service[:name]} & #{service[:subservices].blank? ? "no sub service" : "sub services"} created."
end
