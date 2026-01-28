function formatTimeDisplay(time) {
    const [hours, minutes] = time.split(":").map(Number);
    const suffix = hours >= 12 ? "PM" : "AM";
    const normalizedHour = ((hours % 12) || 12).toString();
    return `${normalizedHour}:${minutes.toString().padStart(2, "0")} ${suffix}`;
}

function getTimeObject(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return new Date(1970, 0, 1, hours, minutes);
}

function addDoctorAppointment() {
    const doctor = document.getElementById("doctorDropdown").value;
    const startTimeRaw = document.getElementById("appointmentStartTime").value;
    const endTimeRaw = document.getElementById("appointmentEndTime").value;

    if (!doctor || !startTimeRaw || !endTimeRaw) {
        alert("Please complete doctor and time fields.");
        return;
    }

    const startTimeDisplay = formatTimeDisplay(startTimeRaw);
    const endTimeDisplay = formatTimeDisplay(endTimeRaw);
    const timePeriod = `${startTimeDisplay} - ${endTimeDisplay}`;

    const now = new Date();
    const currentTime = new Date(1970, 0, 1, now.getHours(), now.getMinutes());
    const startTime = getTimeObject(startTimeRaw);
    const endTime = getTimeObject(endTimeRaw);

    const isActive = currentTime >= startTime && currentTime < endTime;
    const badge = isActive
        ? '<span class="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Active</span>'
        : '<span class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Inactive</span>';

    const row = `<tr>
        <td class="px-4 py-3">${doctor}</td>
        <td class="px-4 py-3">${timePeriod}</td>
        <td class="px-4 py-3">${badge}</td>
    </tr>`;

    document.getElementById("appointmentList").insertAdjacentHTML("beforeend", row);

    document.getElementById("doctorDropdown").value = "";
    document.getElementById("appointmentStartTime").value = "";
    document.getElementById("appointmentEndTime").value = "";
}
