package com.programwithvirag.restservice.RestApp.api;

import com.programwithvirag.restservice.RestApp.Item;
import com.programwithvirag.restservice.RestApp.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@RestController
@RequestMapping(value = "/items")
@CrossOrigin
public class ItemResource {



    @Autowired
    private ItemService itemService;

    @PostMapping
    @CrossOrigin
    public Item addItem( @RequestBody Item item){

        return itemService.addItem( item);

    }

    @GetMapping
    @CrossOrigin
    public List<Item> getItems(){
        return itemService.getItemList();
    }

    @GetMapping (value ="/{itemId}")
    @CrossOrigin
    public Item getItem( @PathVariable("itemId") int itemId){
        return itemService.getItem(itemId);
    }

    @PutMapping(value ="/{itemId}")
    @CrossOrigin
    public Item updateItem( @PathVariable int itemId){
        return itemService.updateItem(itemId);
    }
}
