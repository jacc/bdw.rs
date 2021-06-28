import Head from "next/head";
import Image from "next/image";
import { Player } from "hypixel-api-v2";
import React from "react";
import { Header, StatsBox } from "../components";
import MainLayout from "../layouts/main";
import { hypixel } from "../utils/hypixel";
import { convertNetworkRank, convertNetworkExp } from "../utils/convert";

interface Props {
  playerData: Player | any;
  status: any;
}

const PlayerPage: React.FC<Props> = ({ playerData, status }) => {
  const ones = Object.entries(playerData.stats["Bedwars"]).filter(
    (key, value) => {
      return key[0].includes("eight_one");
    }
  );

  const twos = Object.entries(playerData.stats["Bedwars"]).filter(
    (key, value) => {
      return key[0].includes("eight_two");
    }
  );
  const threes = Object.entries(playerData.stats["Bedwars"]).filter(
    (key, value) => {
      return key[0].includes("four_three");
    }
  );
  const fours = Object.entries(playerData.stats["Bedwars"]).filter(
    (key, value) => {
      return key[0].includes("four_four");
    }
  );

  let bedwars = playerData.stats["Bedwars"];

  let img = `https://cravatar.eu/helmhead/${playerData.displayname}/190.png`;

  return (
    <MainLayout>
      <Head>
        <title>{playerData.displayname}&rsquo;s Stats - bdw.rs</title>
        <meta
          name="description"
          content={`${playerData.displayname} on bdw.rs`}
        />
        <link rel="icon" href="/bed.png" />
      </Head>
      <Header />

      <main>
        <div>
          <div className="flex content-center mb-4 mt-4">
            <div>
              <Image src={img} alt="Player's head" width="64" height="64" />
            </div>
            <div className="ml-4 items-center content-center">
              <h1 className="font-bold text-xl text-gray-200">
                {convertNetworkRank(
                  playerData.newPackageRank,
                  playerData.monthlyPackageRank
                )}{" "}
                {playerData.displayname}
              </h1>
              <h2 className="font-normal text-lg text-gray-200">
                {playerData.achievements.bedwars_level} ✰ • Hypixel Level{" "}
                {convertNetworkExp(playerData.networkExp)}
              </h2>
            </div>
          </div>

          {/* <h2 className='text-left pb-4'>currently playing x</h2> */}
        </div>
        <div>
          <h1 className="text-left font-normal text-lg mb-2 text-gray-200">
            Overall Stats
          </h1>
          <StatsBox
            title="Total Kills"
            description={bedwars.kills_bedwars}
            background="blue-200"
            color="blue-600"
          />
          <StatsBox
            title="Total Deaths"
            description={bedwars.deaths_bedwars}
            background="red-200"
            color="red-600"
          />
          <StatsBox
            title="K/D Ratio"
            description={
              (Math.floor(
                Number(bedwars.kills_bedwars / bedwars.deaths_bedwars) * 100
              ) / 100) as unknown as string
            }
            background="green-200"
            color="green-600"
          />
        </div>
      </main>
    </MainLayout>
  );
};

export const getServerSideProps = async (params: {
  query: { player: string };
}) => {
  const { player } = params.query;
  const playerData = await hypixel.player(player);
  const status = await hypixel.status(player);
  return { props: { playerData, status } };
};

export default PlayerPage;
