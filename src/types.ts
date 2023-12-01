// types.ts
export interface Event {
    _id: {
      $oid: string;
    };
    organizerName: string;
    eventName: string;
    eventDate: {
      $date: {
        $numberLong: string;
      };
    };
    time: string;
    location: string;
    numberOfAttendees: {
      $numberInt: string;
    };
    __v: {
      $numberInt: string;
    };
  }
  