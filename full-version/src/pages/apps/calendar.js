import { useEffect, useRef, useState } from 'react';

// material-ui
import { useMediaQuery, Box, Dialog, SpeedDial, Tooltip } from '@mui/material';

// third-party
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import CalendarStyled from 'sections/apps/calendar/CalendarStyled';
import Toolbar from 'sections/apps/calendar/Toolbar';
import AddEventForm from 'sections/apps/calendar/AddEventForm';
import { getEvents, selectEvent, selectRange, toggleModal, updateCalendarView, updateEvent } from 'store/reducers/calendar';
import { PopupTransition } from 'components/@extended/Transitions';
import { dispatch, useSelector } from 'store';

// types
import { PlusOutlined } from '@ant-design/icons';

// ==============================|| CALENDAR - MAIN ||============================== //

const Calendar = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const { calendarView, events, isModalOpen, selectedRange } = useSelector((state) => state.calendar);
  const selectedEvent = useSelector((state) => {
    const { events, selectedEventId } = state.calendar;
    if (selectedEventId) {
      return events.find((event) => event.id === selectedEventId);
    }
    return null;
  });

  const calendarRef = useRef(null);

  useEffect(() => {
    dispatch(getEvents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = matchDownSM ? 'listWeek' : 'dayGridMonth';
      calendarApi.changeView(newView);
      dispatch(updateCalendarView(newView));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownSM]);

  const [date, setDate] = useState(new Date());

  // calendar toolbar events
  const handleDateToday = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleViewChange = (newView) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.changeView(newView);
      dispatch(updateCalendarView(newView));
    }
  };

  const handleDatePrev = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  // calendar events
  const handleRangeSelect = (arg) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }

    dispatch(selectRange(arg.start, arg.end));
  };

  const handleEventSelect = (arg) => {
    dispatch(selectEvent(arg.event.id));
  };

  const handleEventUpdate = async ({ event }) => {
    try {
      dispatch(
        updateEvent(event.id, {
          allDay: event.allDay,
          start: event.start,
          end: event.end
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <Page title="Calendar">
      <Box sx={{ position: 'relative' }}>
        <CalendarStyled>
          <Toolbar
            date={date}
            view={calendarView}
            onClickNext={handleDateNext}
            onClickPrev={handleDatePrev}
            onClickToday={handleDateToday}
            onChangeView={handleViewChange}
          />

          <FullCalendar
            weekends
            editable
            droppable
            selectable
            events={events}
            ref={calendarRef}
            rerenderDelay={10}
            initialDate={date}
            initialView={calendarView}
            dayMaxEventRows={3}
            eventDisplay="block"
            headerToolbar={false}
            allDayMaintainDuration
            eventResizableFromStart
            select={handleRangeSelect}
            eventDrop={handleEventUpdate}
            eventClick={handleEventSelect}
            eventResize={handleEventUpdate}
            height={matchDownSM ? 'auto' : 720}
            plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
          />
        </CalendarStyled>

        {/* Dialog renders its body even if not open */}
        <Dialog
          maxWidth="sm"
          TransitionComponent={PopupTransition}
          fullWidth
          onClose={handleModal}
          open={isModalOpen}
          sx={{ '& .MuiDialog-paper': { p: 0 } }}
        >
          <AddEventForm event={selectedEvent} range={selectedRange} onCancel={handleModal} />
        </Dialog>
        <Tooltip title="Adicionar novo evento">
          <SpeedDial
            ariaLabel="add-event-fab"
            sx={{ display: 'inline-flex', position: 'sticky', bottom: 24, left: '100%', transform: 'translate(-50%, -50% )' }}
            icon={<PlusOutlined style={{ fontSize: '1.5rem' }} />}
            onClick={handleModal}
          />
        </Tooltip>
      </Box>
    </Page>
  );
};

Calendar.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Calendar;