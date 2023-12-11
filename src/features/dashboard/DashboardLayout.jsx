import styled from "styled-components";
import { useRecentStays } from "./useRecentStays";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
// import TodayActivity from "../check-in-out/TodayActivity";

import TodayActivity from "./../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
    /* grid-template-columns: auto; */
  }
`;

const StyledMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (min-width: 769px) {
    justify-content: space-around;
  }
`;

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />

      <StyledMain>
        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
      </StyledMain>
      <StyledDashboardLayout>
        <SalesChart bookings={bookings} numDays={numDays} />
      </StyledDashboardLayout>
    </>
  );
}

export default DashboardLayout;
