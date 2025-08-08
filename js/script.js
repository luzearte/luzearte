const emailsPermitidos = [
  "contatocertoouerrado@gmail.com",
  "alinerocha10203040@gmail.com",
  "carlosgabrielqqorb@gmail.com"
];

window.handleCredentialResponse = function(response) {
  const token = response.credential;
  const payload = JSON.parse(atob(token.split('.')[1]));
  const email = payload.email;

  if (emailsPermitidos.includes(email)) {
    console.log("Acesso autorizado:", email);
    localStorage.setItem("loggedIn", "true");
    document.getElementById("authOverlay").style.display = "none";
  } else {
    console.log("Acesso negado:", email);
    alert("Você não tem permissão para acessar este site.");
  }
};

function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

// Sample data structure - you can replace this with your actual data
let allArts = [
    {
        image: "images/1.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvVAYNESY/nwg49aS9FkPPcc4aArU7Mw/view?utm_content=DAGvVAYNESY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/2.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvVISVQvg/kRXQk81OTiI4qRF9hItS2Q/view?utm_content=DAGvVISVQvg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/3.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvVKmKbOk/B-fCSUgTXRrp9OqJTZVmZQ/view?utm_content=DAGvVKmKbOk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/4.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvVDdBKCA/I9mQk6rN3x8doR7AuyUkLw/view?utm_content=DAGvVDdBKCA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/5.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvVC1Vp-I/X9FeZ3PvaZ38OdkD9LmCFQ/view?utm_content=DAGvVC1Vp-I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/6.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvVEiFpmQ/ZBb7P7BsRUOm__twhah7PA/view?utm_content=DAGvVEiFpmQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/7.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvVPOtGvM/5AUyDwOP3X4mnOAZjTc8kg/view?utm_content=DAGvVPOtGvM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/8.png",
        title: "Design para Redes Sociais",
        editLink: "https://www.canva.com/design/DAGvVGsGa-w/FzAWhqsMM_qrjo9ta32bqQ/view?utm_content=DAGvVGsGa-w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/9.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://www.canva.com/design/DAGvVCdPep8/1QM1D3iOD5QhbFPNVUYxfg/view?utm_content=DAGvVCdPep8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/10.png",
        title: "Template Convite Gospel",
        editLink: "https://www.canva.com/design/DAGvVMIzGPc/lwf4kCjR2UiJXgCVwP67bA/view?utm_content=DAGvVMIzGPc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/11.png",
        title: "Design para Conferência",
        editLink: "https://www.canva.com/design/DAGvVHCWjTU/1P1aoCSsSLo4tj8jkZvIpw/view?utm_content=DAGvVHCWjTU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/12.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvZ49vWMY/-JT97V4N5de96f79u7SXMg/view?utm_content=DAGvZ49vWMY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/13.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvVAQniPc/BHp1X2rT1ToED4kFSOrUhQ/view?utm_content=DAGvVAQniPc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/14.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvVOgeCNw/InpYIAtJaR9K84GsOwAO4g/view?utm_content=DAGvVOgeCNw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/15.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvVK4u8bo/lF7LgxFrhNALjkmE7fu07Q/view?utm_content=DAGvVK4u8bo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/16.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvVAvd4xM/tQJ1fZvs73N6oLuEz-Pd1w/view?utm_content=DAGvVAvd4xM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/17.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvVB4FmDc/AZ6EyZUvXKiz6OEk8FENdQ/view?utm_content=DAGvVB4FmDc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/18.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvVJBWeQk/7wa8ywAu-EVUGawfu0msjA/view?utm_content=DAGvVJBWeQk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/19.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvVODx_XE/qswrOQisMM89Qmw4U8_NWw/view?utm_content=DAGvVODx_XE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/20.png",
        title: "Design para Redes Sociais",
        editLink: "https://www.canva.com/design/DAGvVAa2xUc/v-nu7iP2oOc2UbPnTTQgrg/view?utm_content=DAGvVAa2xUc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/21.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://www.canva.com/design/DAGvVLzMaQU/kaFxCiUbTMCtaXckuXnCPQ/view?utm_content=DAGvVLzMaQU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/22.png",
        title: "Template Convite Gospel",
        editLink: "https://www.canva.com/design/DAGvVHwYMGc/NJfP0DBzSPt9QNRpupTQeA/view?utm_content=DAGvVHwYMGc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/23.png",
        title: "Design para Conferência",
        editLink: "https://www.canva.com/design/DAGvVL2j068/urhdPCJEAKzqIh9F9xu4xA/view?utm_content=DAGvVL2j068&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/24.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvVOHLQLg/JGNpArRcG8llp6T_Rz7dFQ/view?utm_content=DAGvVOHLQLg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/25.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvVCNQLYc/etH8g6mkqiyJ3mxKOne04Q/view?utm_content=DAGvVCNQLYc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/26.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvVOu3Qtk/hFTnz3nL1hdK46UFjcwpRQ/view?utm_content=DAGvVOu3Qtk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/27.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvVEGrZro/mq0A94ksvQJFUKASxBWzeg/view?utm_content=DAGvVEGrZro&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/28.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvVBVKAjI/K3i6Cg4A_gpaQxuCpIBQlg/view?utm_content=DAGvVBVKAjI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/29.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvVGcytsA/i9b7_FmYRMR6It59DEgSNw/view?utm_content=DAGvVGcytsA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/30.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvVIPRlxQ/iQg0UWI2-TLSec6EDxJwFA/view?utm_content=DAGvVIPRlxQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/31.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvVGhQgQQ/75jvFihytfLAa38ThPte4g/view?utm_content=DAGvVGhQgQQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/32.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvVL4fGKk/ogXTz40HLFAgxs4EGYdCRw/view?utm_content=DAGvVL4fGKk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/33.png",
        title: "Design para Redes Sociais",
        editLink: "https://www.canva.com/design/DAGvVDmuhzM/SI7zpr3UDVzKYnQmaLiB2g/view?utm_content=DAGvVDmuhzM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/34.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://www.canva.com/design/DAGvad29EFY/swOrp-Cug9kUnyI5w57tUg/view?utm_content=DAGvad29EFY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/35.png",
        title: "Template Convite Gospel",
        editLink: "https://www.canva.com/design/DAGvaOJzkeY/tQdpV-8UoCUaNws1IFFnlQ/view?utm_content=DAGvaOJzkeY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/36.png",
        title: "Design para Conferência",
        editLink: "https://www.canva.com/design/DAGvaT3mc8Q/BMBz5P6oUhkQPXJ8X4vatg/view?utm_content=DAGvaT3mc8Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/37.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvabzySb0/HtxZdNfB-2jv7dyTH_xsyA/view?utm_content=DAGvabzySb0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/38.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvaQZ1wak/iWzW69aGcqYhyE_8TZBGcQ/view?utm_content=DAGvaQZ1wak&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/39.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvaT_Dkm0/9r3CLCbMFG7p8wm8il-2Yw/view?utm_content=DAGvaT_Dkm0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/40.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvaex44yA/l848uqD4xAjanYPokfNRMw/view?utm_content=DAGvaex44yA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/41.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvaUTzcIQ/nuoaHIkmScVAw6AbS3Hk1A/view?utm_content=DAGvaUTzcIQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/42.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvaSn45a4/4xwl46_PyaG18-6myopmDw/view?utm_content=DAGvaSn45a4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/43.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvaUBuWDU/R2WXwybtybFNO3Zt3dvfIw/view?utm_content=DAGvaUBuWDU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/44.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvaAjlesM/57b8PAjcmUfKKq0Bu9P5NA/view?utm_content=DAGvaAjlesM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/45.png",
        title: "Design para Redes Sociais",
        editLink: "https://www.canva.com/design/DAGvaLZRHe0/6_3xta8MWS30v3fk033gzg/view?utm_content=DAGvaLZRHe0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/46.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://www.canva.com/design/DAGvaAFLhcI/j7oNOCRwcSV1QQZG4LC_1Q/view?utm_content=DAGvaAFLhcI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/47.png",
        title: "Template Convite Gospel",
        editLink: "https://www.canva.com/design/DAGvaC0D4sU/z10L3cV9j_FBfh8uRqglQQ/view?utm_content=DAGvaC0D4sU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/48.png",
        title: "Design para Conferência",
        editLink: "https://www.canva.com/design/DAGvaFOHK2I/hSgHST-1UnCN2On0-kcJeA/view?utm_content=DAGvaFOHK2I&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/49.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvaOmF6l0/R1L2QBkfPxurXkdwKWLo5Q/view?utm_content=DAGvaOmF6l0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/50.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvaHm6Rzo/GfL0LM23EnAFEmtEEIWK1g/view?utm_content=DAGvaHm6Rzo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/51.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvaGXKYkQ/sYhCiaT5m6S6X8hkJkmRUQ/view?utm_content=DAGvaGXKYkQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/52.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvaFsP6Kg/Qh5APyC9XOyxyebFhQ6G_w/view?utm_content=DAGvaFsP6Kg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/53.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvaJZeRrE/AiSWtp3uwmr7xeHzmvdiZQ/view?utm_content=DAGvaJZeRrE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/54.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvaJCor3Y/a5Re02Ekh0n1Y1IEXvoZXw/view?utm_content=DAGvaJCor3Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/55.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvaAKWuBo/oq5RA8hyoyiPkb9lgdLShA/view?utm_content=DAGvaAKWuBo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/56.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvaCbvu_4/FwSN6md2F3cCBPXu2KOm6w/view?utm_content=DAGvaCbvu_4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/57.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvaDWjahQ/1pG26cb4bPY29xGbLhpH5A/view?utm_content=DAGvaDWjahQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/58.png",
        title: "Design para Redes Sociais",
        editLink: "https://www.canva.com/design/DAGvaGPwoGU/lVDEqPI_HmdilIRWy0-B5Q/view?utm_content=DAGvaGPwoGU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/59.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://www.canva.com/design/DAGvaEyzEiw/FwmCplK4fCrldkRgnrPLsw/view?utm_content=DAGvaEyzEiw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/60.png",
        title: "Template Convite Gospel",
        editLink: "https://www.canva.com/design/DAGvaM_YFRw/tIxLq69N3PMyeOdlnKSvjA/view?utm_content=DAGvaM_YFRw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/61.png",
        title: "Design para Conferência",
        editLink: "https://www.canva.com/design/DAGvaOc1VrA/07nZhYW5YfzH3UB7UjHCmQ/view?utm_content=DAGvaOc1VrA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/62.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvaLFeaQs/Q8cUeSdOirc8t65X7fzYDw/view?utm_content=DAGvaLFeaQs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/63.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvaPl3xFQ/yyH8U1ilNibeLXWbC4hcFA/view?utm_content=DAGvaPl3xFQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/64.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvaAEX6Vo/wSmayDKLe9Rf8s13d3sdiw/view?utm_content=DAGvaAEX6Vo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/65.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvaGSLOGU/yr_xBQZ3tTmg6pxJCqUBxA/view?utm_content=DAGvaGSLOGU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/66.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvaHdzofU/b8icxqOKAFihz51AA_NnHw/view?utm_content=DAGvaHdzofU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/67.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvaNq4PCk/arJ7X0cZH_F_mFabCh6Q4g/view?utm_content=DAGvaNq4PCk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/68.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvaMUacQE/JQ5zVQ3VnzLQBaGituNh-g/view?utm_content=DAGvaMUacQE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/69.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvaP3JuHQ/-DcoAZavxwAL39pty_UYfQ/view?utm_content=DAGvaP3JuHQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/70.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvaA03st4/6Qvk8-ZERBhztUuuNGKhEg/view?utm_content=DAGvaA03st4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/71.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvaNV8RPQ/hzrAyikoEzkBA26QNAqUJw/view?utm_content=DAGvaNV8RPQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/72.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvaBjJbYw/zhLnhacUjmR5mhp_n0Aw7A/view?utm_content=DAGvaBjJbYw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/73.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvaB3hCBE/cqFoquGneegmBzJPvpMcQg/view?utm_content=DAGvaB3hCBE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/74.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvaJCY0Wk/LsjqCfw__Md9G4vkt1QLYg/view?utm_content=DAGvaJCY0Wk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/75.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvacx4SMg/kiLcay-7zTjoMAGypSa8Qw/view?utm_content=DAGvacx4SMg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/76.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvaaktnLA/jBvX6DF8ONnBFxan6ieRtg/view?utm_content=DAGvaaktnLA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/77.png",
        title: "Design para Redes Sociais",
        editLink: "https://www.canva.com/design/DAGvaQEfwoE/M141SD-uk6tib9bCo-ZbkQ/view?utm_content=DAGvaQEfwoE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/78.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://www.canva.com/design/DAGvaW5IKyg/TZgnPPJJSIpSIDjeKU898g/view?utm_content=DAGvaW5IKyg&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/79.png",
        title: "Template Convite Gospel",
        editLink: "https://www.canva.com/design/DAGvafpywiM/D1Dz1CKiPv5W3SE3PJJtOQ/view?utm_content=DAGvafpywiM&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/80.png",
        title: "Design para Conferência",
        editLink: "https://www.canva.com/design/DAGvaS_LoP8/q6tQNMHbm1EwmqufOExRIA/view?utm_content=DAGvaS_LoP8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/81.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvaSmXmp4/NbL7BAyiKse81q6wvgKvIA/view?utm_content=DAGvaSmXmp4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/82.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvaVVgLik/1go07W8DsVWFR0jMns5kOQ/view?utm_content=DAGvaVVgLik&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/83.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvaQ3Ek3E/7J-nkH1fNv4VR9CFyPGBCw/view?utm_content=DAGvaQ3Ek3E&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/84.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvafVcny4/-i12no5sQ53k7OR4_oZUXQ/view?utm_content=DAGvafVcny4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/85.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvabT8_e8/jel2mzP5WKSv5T32rpmzYQ/view?utm_content=DAGvabT8_e8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/86.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvacvL0cY/HwP70lm6u8uvRCuCtFqR4w/view?utm_content=DAGvacvL0cY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/87.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvaQwfNSs/fxrxebresuLY14DUYX7z8w/view?utm_content=DAGvaQwfNSs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/88.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvab4O6C4/gb5-OVNMQyKUT_zDFxuuhw/view?utm_content=DAGvab4O6C4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/89.png",
        title: "Design para Redes Sociais",
        editLink: "https://www.canva.com/design/DAGvaQL6cHw/M23c2sNWr3uhzfhfeoUl9Q/view?utm_content=DAGvaQL6cHw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/90.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://www.canva.com/design/DAGvaXyGL0A/BiOttjsPhMArkws-NOKZmg/view?utm_content=DAGvaXyGL0A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/91.png",
        title: "Template Convite Gospel",
        editLink: "https://www.canva.com/design/DAGvaSLk93A/zVpN7-NfOCY1fAVLdAWOAw/view?utm_content=DAGvaSLk93A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/92.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvavOMkHs/bLW4jDinzjpP-viLkNPeeA/view?utm_content=DAGvavOMkHs&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/93.png", // Caminho relativo para sua imagem
        title: "Arte Gospel - Louvor e Adoração",
        editLink: "https://www.canva.com/design/DAGvanebc9w/ioEJJkCzGoPKhOlZyR3YZA/view?utm_content=DAGvanebc9w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/94.png",
        title: "Design Inspiracional - Fé",
        editLink: "https://www.canva.com/design/DAGvaiyElII/YIScBu9FiktF4E7junouJg/view?utm_content=DAGvaiyElII&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/95.png",
        title: "Arte para Culto Dominical",
        editLink: "https://www.canva.com/design/DAGvaoWjf9Y/2cuky1FxIRuqLhixXQFjnA/view?utm_content=DAGvaoWjf9Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/96.png",
        title: "Template Versículo Bíblico",
        editLink: "https://www.canva.com/design/DAGvapqmQ0s/JmXmLxQ-vubQLL2GaW3upw/view?utm_content=DAGvapqmQ0s&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/97.png",
        title: "Design para Eventos Gospel",
        editLink: "https://www.canva.com/design/DAGvalZDgeE/rVNmTuWdj1f0tDlB7Stgcw/view?utm_content=DAGvalZDgeE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/98.png",
        title: "Arte Motivacional Cristã",
        editLink: "https://www.canva.com/design/DAGvavMWjc4/TsVEqdgJZYKkhwjpNSCwug/view?utm_content=DAGvavMWjc4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/99.png",
        title: "Template para Pregação",
        editLink: "https://www.canva.com/design/DAGvaqAIHuE/YmmO13_dnkLRQeWmMiyMvw/view?utm_content=DAGvaqAIHuE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/100.png",
        title: "Design para Redes Sociais",
        editLink: "https://www.canva.com/design/DAGvaimRZb8/PCmULP6kb4KJm1pvnJRnfA/view?utm_content=DAGvaimRZb8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/101.png",
        title: "Arte para Ministério Jovem",
        editLink: "https://www.canva.com/design/DAGvajuHeQo/OP6-2aHHe1AoaOK6PRPsoQ/view?utm_content=DAGvajuHeQo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/102.png",
        title: "Template Convite Gospel",
        editLink: "https://www.canva.com/design/DAGvat3dJ6Y/SHr1l6RVlSbTBqORwyOvNg/view?utm_content=DAGvat3dJ6Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/103.png",
        title: "Design para Conferência",
        editLink: "https://www.canva.com/design/DAGvajBuFaA/2gdEf-z_pF0dPQ1cxu4imQ/view?utm_content=DAGvajBuFaA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/104.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvaqoS3ic/clYQ_FcTrK4tLmx5poMnSg/view?utm_content=DAGvaqoS3ic&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/105.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvauGQNnE/KmDEf1vvlWkEXpjrHG9XDw/view?utm_content=DAGvauGQNnE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    },
    {
        image: "images/106.png",
        title: "Arte Devocional Diário",
        editLink: "https://www.canva.com/design/DAGvasqHgic/QSK5CJcXNGH-MJ0fi8dY4A/view?utm_content=DAGvasqHgic&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview"
    }

];

let currentIndex = 0;
const artsPerLoad = 9;

// Function to add arts to the data array
function addArt(imageUrl, title, editLink) {
    allArts.push({
        image: imageUrl,
        title: title,
        editLink: editLink
    });
}

// Function to create art card HTML
function createArtCard(art) {
    return `
                <div class="art-card">
                    <img src="${art.image}" alt="${art.title}" class="art-image" 
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNzBMMTMwIDEzMEg3MEwxMDAgNzBaIiBmaWxsPSIjOUI5QkEwIi8+CjxjaXJjbGUgY3g9IjEyMCIgY3k9IjgwIiByPSI4IiBmaWxsPSIjOUI5QkEwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QkEwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiPkltYWdlbSBuw6NvIGVuY29udHJhZGE8L3RleHQ+Cjwvc3ZnPg=='; this.alt='Imagem não encontrada';">
                    <div class="art-info">
                        <h3 class="art-title">${art.title}</h3>
                        <a href="${art.editLink}" target="_blank" class="edit-button">
                            Editar no Canva
                        </a>
                    </div>
                </div>
            `;
}

// Function to load more arts
function loadMoreArts() {
    const loading = document.getElementById('loading');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const galleryGrid = document.getElementById('galleryGrid');

    // Show loading animation
    loading.classList.add('active');
    loadMoreBtn.disabled = true;

    // Simulate loading delay
    setTimeout(() => {
        const endIndex = Math.min(currentIndex + artsPerLoad, allArts.length);

        for (let i = currentIndex; i < endIndex; i++) {
            const artCard = document.createElement('div');
            artCard.innerHTML = createArtCard(allArts[i]);
            galleryGrid.appendChild(artCard.firstElementChild);
        }

        currentIndex = endIndex;

        // Hide loading animation
        loading.classList.remove('active');
        loadMoreBtn.disabled = false;

        // Hide load more button if all arts are loaded
        if (currentIndex >= allArts.length) {
            loadMoreBtn.style.display = 'none';
        }

        // Update button text
        const remaining = allArts.length - currentIndex;
        if (remaining > 0) {
            loadMoreBtn.textContent = `Carregar Mais Artes (${remaining} restantes)`;
        }
    }, 1000);
}

// Function to initialize the gallery
function initializeGallery() {
    if (allArts.length === 0) {
        // Show message when no arts are available
        document.getElementById('galleryGrid').innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #6B7280;">
                        <h3 style="font-size: 1.5rem; margin-bottom: 10px;">Galeria em Preparação</h3>
                        <p>As artes serão carregadas em breve. Aguarde!</p>
                    </div>
                `;
        document.getElementById('loadMoreBtn').style.display = 'none';
        return;
    }

    // Load first batch of arts
    loadMoreArts();
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollTop = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', initializeGallery);

// Example function to add arts (you can call this to add your arts)
function loadArtsData() {
    // Example of how to add arts - replace with your actual data
    // addArt("https://example.com/image1.jpg", "Arte Gospel 1", "https://canva.com/edit1");
    // addArt("https://example.com/image2.jpg", "Arte Gospel 2", "https://canva.com/edit2");

    // After adding all arts, reinitialize the gallery
    currentIndex = 0;
    document.getElementById('galleryGrid').innerHTML = '';
    document.getElementById('loadMoreBtn').style.display = 'block';
    initializeGallery();
}


