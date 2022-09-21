// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");
// class Schedule
class Time
{
    // hour = 0;
    // minute = 0;
    constructor(hour, minute)
    {
        this.hour = hour;
        this.minute = minute;
    }
    getHour()
    {
        return this.hour;
    }
    getMinute()
    {
        return this.minute;
    }
    occursBefore(time)
    {
        if (this.hour < time.hour)
        {
            return true;
        }
        if ((this.hour == time.hour) && (this.minute < time.minute))
        {
            return true;
        }
        return false;
    }
    getDifference(time)
    {
        let hoursDiff = this.hour - time.hour;
        return hoursDiff * 60 + this.minute - time.minute;
    }
    toString()
    {
        let out = new String(this.hour).toString() + ":" + new String(this.minute).toString();
        if (this.minute < 10)
        {
            out += "0";
        }
        if (this.hour < 10)
        {
            out = "0" + out;
        }
        return out;
    }
}
class Meeting
{
    day = null;
    start = null;
    end = null;
     static days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    constructor(day, start, end)
    {
        this.day = day;
        this.start = start;
        this.end = end;
    }
    getDay()
    {
        return this.day;
    }
    getEnd()
    {
        return this.end;
    }
    getStart()
    {
        return this.start;
    }
    getDayNumber()
    {
        let i = 0;
        for (i = 0; i < Meeting.days.length; i++)
        {
            if (Meeting.days[i]== this.day)
            {
                break;
            }
        }
        return i;
    }
    occursBefore(meeting)
    {
        if (this.getDayNumber() < meeting.getDayNumber())
        {
            return true;
        }
        if ((this.getDayNumber() == meeting.getDayNumber()) && (this.getStart().occursBefore(meeting.getStart())))
        {
            return true;
        }
        return false;
    }
    getSleepTime(meeting)
    {
        if (this.getDayNumber() > meeting.getDayNumber())
        {
            let daySleep = (this.getDayNumber() - meeting.getDayNumber() - 1) * 24 * 60;
            let currDaySleep = this.getStart().getDifference(new Time(0, 0));
            let prevDaySleep = new Time(24, 0).getDifference(meeting.getEnd());
            return currDaySleep + prevDaySleep + daySleep;
        }
        return this.getStart().getDifference(meeting.getEnd());
    }
    toString()
    {
        let out = this.day;
        out += " " + this.getStart().toString() + " " + this.getEnd().toString();
        return out;
    }
}
class Solution
{
    static solution(S)
    {
        let meets = S.split("\n");
        let M = meets.length;
        let meetings = Array(M).fill(null);
        for (i; i < M; i++)
        {
            let currMeet = meets[i];
            let dayTime = currMeet.split(" ");
            let day = dayTime[0];
            let time = dayTime[1];
            let startEnd = time.split("-");
            let start = startEnd[0];
            let end = startEnd[1];
            let startHourMinute = start.split(":");
            let endHourMinute = end.split(":");
            let startHourInt = Integer.parseInt(startHourMinute[0]);
            let startMinuteInt = Integer.parseInt(startHourMinute[1]);
            let endHourInt = Integer.parseInt(endHourMinute[0]);
            let endMinuteInt = Integer.parseInt(endHourMinute[1]);
            let startTime = new Time(startHourInt, startMinuteInt);
            let endTime = new Time(endHourInt, endMinuteInt);
            let newMeeting = new Meeting(day, startTime, endTime);
            meetings[i] = newMeeting;
        }
        Solution.sortMeetings(meetings);
        let initialSleep = meetings[0].getStart().getDifference(new Time(0, 0)) + meetings[0].getDayNumber() * 24 * 60;
        let endSleep = new Time(24, 0).getDifference(meetings[M - 1].getEnd()) + (6 - meetings[M - 1].getDayNumber()) * 24 * 60;
        let maxSleep = Math.max(initialSleep,endSleep);
        for (i; i < M; i++)
        {
            let currSleep = meetings[i].getSleepTime(meetings[i - 1]);
            maxSleep = Math.max(maxSleep,currSleep);
        }
        return maxSleep;
    }
    static sortMeetings(meetings)
    {
        let n = meetings.length;
        for (i; i < n - 1; i++)
        {
            for (j; j < n - i - 1; j++)
            {
                if (meetings[j].occursBefore(meetings[j + 1]) == false)
                {
                    let temp = meetings[j];
                    meetings[j] = meetings[j + 1];
                    meetings[j + 1] = temp;
                }
            }
        }
    }
}