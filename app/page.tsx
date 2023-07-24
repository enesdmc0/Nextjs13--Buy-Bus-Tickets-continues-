import TravelForm from "@/components/TravelForm";
import TravelList from "@/components/TravelList";
import getCurrentUser from "@/actions/getCurrentUser";
import getExpeditions from "@/actions/getExpeditions";

export default async function Home({searchParams}: {searchParams: any}) {
  const currentUser = await getCurrentUser()
  const expeditions = await getExpeditions(searchParams)




  return (
    <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
      <TravelForm />
      <TravelList expeditions={expeditions} />
    </div>
  )
}
