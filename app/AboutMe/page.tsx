"use client";
import { title } from "@/components/primitives";
import { Button } from "@heroui/button";
import link from "next/link";
import { useState } from "react";

export default function AboutMe() {
    let facts: string[] = [
    "A tattoo needle can move between 50 and 30,000 times per minute", 
    "The word 'photography' originates from Greek, meaning drawing with light", 
    "The average time spent on webpages is 54 seconds, while [time spent on] blog posts average 3-5 minutes", 
    "Cats have unique noseprints the same way we have unique fingerprints", 
    "Bananas are berries, but strawberries are not", 
    "Crocodiles can gallop like a horse", 
    "The internet is controlled by 14 people with seven keys", 
    "Only one person can change the size of their pupil", 
    "Nintendo is 130 years old", 
    "A Cricket's chirps can tell you the temperature", 
    "A shrimp's heart is in its head", 
    "It is impossible for most people to lick their own elbow", 
    "It is physically impossible for pigs to look up into the sky" 
    ]


    const [fact, setFact] = useState("");
    return (
      <div>
        <h1 className={title()}>About Me</h1>
        <br />
        <Button onPress={() => {setFact(facts[Math.floor(Math.random() * facts.length)])}} className="bg-red-500 text-white" >Press 4 fact</Button>
        <p>{fact}</p>
        

        <p><strong>Pictures</strong></p>
        <img src="https://car-images.bauersecure.com/wp-images/2281/1752x1168/096_gt86.jpg?mode=max&quality=90&scale=down" alt="" width="700" />
        <p>Similar to my car</p>
        <img src="https://images.squarespace-cdn.com/content/v1/63ee0932b4d0202c9e6b6788/1679605071551-197Z0VIWIBVOVHE0ABVM/BMW+M3C+5.png?format=500w" alt="" width="700" />
        <p>Dream Car</p>
        <img src="https://cdn.outsideonline.com/wp-content/uploads/2023/09/Campfire_Burn_Ban_H.jpg?crop=16:9&width=960&enable=upscale&quality=100" alt="" width="700"/>
        <p>Campfire with Friends</p>
        <br />
        <h1><strong>Description</strong></h1>
        <p>I enjoy hanging out with friends and going out! Some of my hobbies are cars, swimming, and biking</p>
        <br />
        <p><strong>Cool Links</strong></p>
        <a className="bg-fuchsia-600" href="https://thehamiltoncollection.com" target="_blank">The Hamilton Collection</a>
        <br />
        <a className="bg-pink-600" href="https://www.instagram.com" target="_blank">Instagram</a>
        <br />
        <Button as={link} href="https://issaquah.instructure.com/courses/36871">Canvas</Button>
      </div>
    );
  }