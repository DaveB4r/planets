import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import { useAppContext } from "@/provider/AppProvider";

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  alphabetically: boolean;
  text: string;
  home: boolean;
  setInfo: Dispatch<SetStateAction<any>>;
};

const PlanetList = ({
  setShowModal,
  alphabetically,
  text,
  home,
  setInfo,
}: Props) => {
  const { favorites } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [planets, setPlanets] = useState<any>([]);

  useEffect(() => {
    GetPlanets(text);
  }, [favorites, alphabetically, text]);

  const GetPlanets = async (text: string) => {
    try {
      setLoading(true);
      setPlanets([]);
      const regex = new RegExp(text, "g");
      if (home) {
        const response = await fetch(
          `https://api.le-systeme-solaire.net/rest/bodies?data=englishName&filter[]=isPlanet,eq,true&order=englishName,${
            alphabetically ? "a" : "de"
          }sc`
        );
        const data = await response.json();
        let bodies = data?.bodies;
        if (text) {
          bodies = bodies?.filter((body: any) => {
            if (regex.test(String(body.englishName).toLocaleLowerCase()))
              return body;
          });
        }
        setPlanets(bodies);
      } else {
        if (favorites) {
          let favoritesArray = favorites.split(",");
          if (text) {
            favoritesArray = favoritesArray?.filter((favorite: string) => {
              if (regex.test(String(favorite).toLocaleLowerCase()))
                return favorite;
            });
          }
          favoritesArray
            .sort((a: string, b: string) =>
              alphabetically ? a.localeCompare(b) : b.localeCompare(a)
            )
            .forEach((favorite: string) => {
              setPlanets((prev: any) => [...prev, { englishName: favorite }]);
            });
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error trying to fetch data", error);
    }
  };

  return (
    <FlatList
      data={planets}
      style={{
        marginBottom: 150,
      }}
      renderItem={({ item, index }) => (
        <PlanetCard
          key={index}
          name={item?.englishName}
          setShowModal={setShowModal}
          setInfo={setInfo}
        />
      )}
    />
  );
};

export default PlanetList;

const styles = StyleSheet.create({});
