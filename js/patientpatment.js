function addPayment() {
    const patient = document.getElementById("patientName").value;
    const amount = document.getElementById("billAmount").value;
    const method = document.getElementById("paymentMethod").value;

    if (!amount || Number(amount) <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    const statusBadge = '<span class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Paid</span>';
    const row = `<tr class="divide-x divide-slate-100"> 
        <td class="px-4 py-3 text-slate-800 font-medium">${patient}</td>
        <td class="px-4 py-3 text-slate-700">${amount} Tk</td>
        <td class="px-4 py-3 text-slate-700">${method}</td>
        <td class="px-4 py-3">${statusBadge}</td>
    </tr>`;

    document.getElementById("paymentList").insertAdjacentHTML('beforeend', row);
    document.getElementById("billAmount").value = "";
}