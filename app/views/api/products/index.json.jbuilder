@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :short_desc, :department_id, :active

    #   if product.product_image.attached?
    #     json.productImageUrl url_for(product.product_image)
    #   else 
    #     json.productImageUrl ""
    #   end
        
    #   json.artistName product.artist.name
    end
  
end
  
  
  
  