import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
    logo
    items
body
    search
    res-container
        res card
footer
    copyright
    links
    contact
    company name
*/

const Header = () => (
  <div className="nav-bar">
    <div className="nav-logo">
      <img
        className="logo"
        src="https://res.cloudinary.com/dboou1pyn/image/upload/v1749276222/jfiovexh9jlnro0okdze.png"
        alt="Logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

const RestaurentCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, sla } = resData?.card?.card?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.card.card.info.cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
      <h5>
        {sla.deliveryTime} to {sla.deliveryTime + 5} minutes
      </h5>
    </div>
  );
};
const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "995730",
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/abc8ee3d-69c7-44a5-bd85-dea1315376a3_995730.jpg",
          locality: "Brodipet",
          areaName: "Arundelpet",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 3.9,
          parentId: "434792",
          avgRatingString: "3.9",
          totalRatingsString: "360",
          promoted: true,
          adTrackingId:
            "cid=29952067~p=0~adgrpid=29952067#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=995730~plpr=COLLECTION~eid=3b65c256-4e32-49ed-bb60-eb27d36fd290~srvts=1749475562976~collid=83639",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-09 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹129",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "29952067",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=995730&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "116692",
          name: "AL Ajaib Restaurant",
          cloudinaryImageId: "gxvjyfjb4gwqzkzujznq",
          locality: "Arundelpet",
          areaName: "Brodipet & Arundalpet",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Lebanese"],
          avgRating: 3.9,
          parentId: "14468",
          avgRatingString: "3.9",
          totalRatingsString: "15K+",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-10 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "9 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=116692&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1063708",
          name: "Sapno Ki Biryani'S",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/18/a5e9b05d-3ae4-4f6a-85db-fe1bd512c967_c3679573-def8-4234-8f71-964655d9af81.jpg",
          locality: "Lakshmipuram",
          areaName: "Lakshmipuram",
          costForTwo: "₹400 for two",
          cuisines: ["Biryani", "Chinese", "Kebabs"],
          avgRating: 4.2,
          parentId: "617475",
          avgRatingString: "4.2",
          totalRatingsString: "137",
          promoted: true,
          adTrackingId:
            "cid=29964245~p=1~adgrpid=29964245#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1063708~plpr=COLLECTION~eid=75c5fc28-2429-4380-96e5-53224e2a8aec~srvts=1749475562976~collid=83639",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 5.6,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "5.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-10 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "29964245",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1063708&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "126427",
          name: "Spicy One Biryani Point A/C",
          cloudinaryImageId: "yegljlnieqbqiurdak3g",
          locality: "Arundelpet",
          areaName: "Old Guntur",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani", "Chinese"],
          avgRating: 4.2,
          parentId: "14417",
          avgRatingString: "4.2",
          totalRatingsString: "9.0K+",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-09 22:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹175 OFF",
            subHeader: "ABOVE ₹349",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=126427&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "495173",
          name: "Kohinoor Original Hyderabadi Biryanies",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/4/3dc594d6-1786-4982-ab70-ffe5836a1abd_f86a1b00-130f-47bf-a4e1-b024129f37ec.JPG",
          locality: "Kothapet",
          areaName: "Brodipet & Arundalpet",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani", "Chinese"],
          avgRating: 4.2,
          parentId: "297146",
          avgRatingString: "4.2",
          totalRatingsString: "747",
          promoted: true,
          adTrackingId:
            "cid=29977802~p=2~adgrpid=29977802#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=495173~plpr=COLLECTION~eid=9db485bb-a59f-4d78-a6b1-45c886d44825~srvts=1749475562976~collid=83639",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-09 22:30:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "29977802",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=495173&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "319255",
          name: "Ak Special Hyderabadi Biryani House",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/29/bae86705-61f9-43c9-b832-8ae4cb1ef15a_e0a720f1-e5f1-4031-adb1-d8f6bff2944a.jpg",
          locality: "Kothapet",
          areaName: "Old Guntur",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Chinese"],
          avgRating: 4.4,
          parentId: "453106",
          avgRatingString: "4.4",
          totalRatingsString: "16K+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-10 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹66 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=319255&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "860480",
          name: "Hoskote Four Am Biryani",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/11/7/cbcbc178-9801-4d8b-909f-20af332be8a4_026a6f24-1f61-41a2-b675-5536597a3188.JPG",
          locality: "Koritepadu",
          areaName: "Lakshmipuram",
          costForTwo: "₹250 for two",
          cuisines: ["Biryani"],
          avgRating: 4.3,
          parentId: "434374",
          avgRatingString: "4.3",
          totalRatingsString: "2.7K+",
          promoted: true,
          adTrackingId:
            "cid=29963411~p=3~adgrpid=29963411#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=860480~plpr=COLLECTION~eid=c9402fa0-f1aa-4988-8886-eabf3867ddee~srvts=1749475562976~collid=83639",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-06-09 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "29963411",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=860480&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <p>search </p>
      </div>
      <div className="res-container">
        {resList.map((restaurent, index) => (
          <RestaurentCard key={restaurent.card.card.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
