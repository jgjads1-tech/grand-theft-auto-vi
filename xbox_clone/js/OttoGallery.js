// UmpOtto Gallery V1.0 for MWF
window.aemData = {};
window.videoData = {}
const videoDataUrl = "https://" + document.domain + "/en-us/global-shares/script/js/TGD_videos.json";

async function loadVidData() {
  try {
    const response = await fetch(videoDataUrl); // Path to your file
    if (!response.ok) throw new Error('Error fetching video data');
    
    const data = await response.json(); // Parses JSON into a JS object
    videoData = data;
    checkVideos();
  } catch (error) {
    console.error('Error loading video JSON:', error);
  }
}

async function umpOtto() {
  let schemaRun = false;
  if (Object.keys(aemData).length > 0 && schemaRun === false) {
    videoSchema();
  }
  function videoSchema() {
    schemaRun = true;
    const aemIds = Object.keys(aemData);
    aemIds.forEach(function(id) {
      const aemVid = aemData[id];
      const name = aemVid.videoTitle;
      const uploadDate = "2025-6-1"; // update this, keep as ISO 8601 format
      const thumbnailUrl = aemVid.videoScreenshot;
      const contentUrl = aemVid.videoUrl.replace(".mpd", "");
      const schemaCode = '<script type="application/ld+json">' +
        '{' +
          '"@context": "https://schema.org/",' +
          '"@type": "VideoObject",' +
          '"name": "' + name + '",' +
          '"thumbnailUrl": "' + thumbnailUrl + '",' +
          '"uploadDate": "' + uploadDate + '",' +
          '"contentUrl": "' + contentUrl + '",' +
          '"encodingFormat": "mp4"' +
        '}' +
        '</sc' + 'ript>';
      $("body").append(schemaCode);
    })
  }
  const { ump } = await import("https://www.microsoft.com/videoplayer/ump.mjs");
  let umpElements = {}
  let UmpPlayers = {}
  let umpPlayerOptions = {}
  const ottotext = {
    "locales": {
      "en-us": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialog box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialog",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "ar-sa": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialog box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialog",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "ar-ae": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialog box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialog",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "cs-cz": {
        "keyAriawatch": "Přehrát video:",
        "keyPlay": "Hrát",
        "keyDialogbox": "dialogové okno",
        "keySeeimage": "Zobrazit obrázek",
        "keyClosedialog": "Zavřít dialogové okno",
        "keyClickenlarge": "kliknutím zvětšíte vyskakovací okno (<PLACEHOLDER>)",
        "keyGamearia": "Videoukázky a obrázky ze hry",
        "keyThumbnailaria": "Miniatury upoutávek a obrázků ze hry",
        "keyThumbnailproductaria": "Miniatury obrázků a videí",
        "keyProductaria": "Galerie obrázků a videí produktu"
      },
      "da-dk": {
        "keyAriawatch": "Afspil videoen:",
        "keyPlay": "Spil",
        "keyDialogbox": "dialogboks",
        "keySeeimage": "Se billede",
        "keyClosedialog": "Luk-dialogboks",
        "keyClickenlarge": "klik for at forstørre (<PLACEHOLDER>)-popup-vinduet",
        "keyGamearia": "Trailere og gameplay-billeder",
        "keyThumbnailaria": "Thumbnails af trailere og billeder af gameplay",
        "keyThumbnailproductaria": "Thumbnails af billeder og videoer",
        "keyProductaria": "Galleri af produktbilleder og -videoer"
      },
      "de-at": {
        "keyAriawatch": "Video wiedergeben:",
        "keyPlay": "Abspielen",
        "keyDialogbox": "Dialogfeld",
        "keySeeimage": "Bild anzeigen",
        "keyClosedialog": "Dialogfeld „Schließen“",
        "keyClickenlarge": "Zum Vergrößern des Pop-up-Fensters (<PLACEHOLDER>) klicken",
        "keyGamearia": "Trailer und Spielbilder",
        "keyThumbnailaria": "Miniaturansichten von Trailern und Gameplay-Bildern",
        "keyThumbnailproductaria": "Miniaturansichten von Bildern und Videos",
        "keyProductaria": "Galerie der Produktbilder und Videos"
      },
      "de-ch": {
        "keyAriawatch": "Video wiedergeben:",
        "keyPlay": "Abspielen",
        "keyDialogbox": "Dialogfeld",
        "keySeeimage": "Bild anzeigen",
        "keyClosedialog": "Dialogfeld „Schließen“",
        "keyClickenlarge": "Zum Vergrößern des Pop-up-Fensters (<PLACEHOLDER>) klicken",
        "keyGamearia": "Trailer und Spielbilder",
        "keyThumbnailaria": "Miniaturansichten von Trailern und Gameplay-Bildern",
        "keyThumbnailproductaria": "Miniaturansichten von Bildern und Videos",
        "keyProductaria": "Galerie der Produktbilder und Videos"
      },
      "de-de": {
        "keyAriawatch": "Video wiedergeben:",
        "keyPlay": "Abspielen",
        "keyDialogbox": "Dialogfeld",
        "keySeeimage": "Bild anzeigen",
        "keyClosedialog": "Dialogfeld „Schließen“",
        "keyClickenlarge": "Zum Vergrößern des Pop-up-Fensters (<PLACEHOLDER>) klicken",
        "keyGamearia": "Trailer und Spielbilder",
        "keyThumbnailaria": "Miniaturansichten von Trailern und Gameplay-Bildern",
        "keyThumbnailproductaria": "Miniaturansichten von Bildern und Videos",
        "keyProductaria": "Galerie der Produktbilder und Videos"
      },
      "el-gr": {
        "keyAriawatch": "Δείτε το βίντεο:",
        "keyPlay": "Παίξτε",
        "keyDialogbox": "παράθυρο διαλόγου",
        "keySeeimage": "Βλ. εικόνα",
        "keyClosedialog": "Κλείσιμο παραθύρου διαλόγου",
        "keyClickenlarge": "κάντε κλικ για μεγέθυνση (<PLACEHOLDER>) - αναδυόμενο παράθυρο",
        "keyGamearia": "Τρέιλερ και εικόνες παιχνιδιού",
        "keyThumbnailaria": "Μικρογραφίες από τρέιλερ και εικόνες παιχνιδιού",
        "keyThumbnailproductaria": "Μικρογραφίες εικόνων και βίντεο",
        "keyProductaria": "Συλλογή εικόνων και βίντεο προϊόντος"
      },
      "en-au": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialogue box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialogue",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "en-ca": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialog box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialog",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyProductaria": "Gallery of product images and videos"
      },
      "en-gb": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialogue box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialogue",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "en-hk": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialogue box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialogue",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "en-ie": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialogue box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialogue",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "en-in": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialogue box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialogue",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "en-nz": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialogue box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialogue",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "en-sg": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialog box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialog",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "en-za": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialogue box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialogue",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "es-ar": {
        "keyAriawatch": "Reproducir video:",
        "keyPlay": "Reproducir",
        "keyDialogbox": "cuadro de diálogo",
        "keySeeimage": "Ver imagen",
        "keyClosedialog": "Cerrar diálogo",
        "keyClickenlarge": "Ventana emergente Haz clic para ampliar (<PLACEHOLDER>)",
        "keyGamearia": "Avances e imágenes de jugabilidad",
        "keyThumbnailaria": "Miniaturas de avances e imágenes de jugabilidad",
        "keyThumbnailproductaria": "Miniaturas de imágenes y videos",
        "keyProductaria": "Galería de imágenes y videos del producto"
      },
      "es-cl": {
        "keyAriawatch": "Reproducir video:",
        "keyPlay": "Reproducir",
        "keyDialogbox": "cuadro de diálogo",
        "keySeeimage": "Ver imagen",
        "keyClosedialog": "Cerrar diálogo",
        "keyClickenlarge": "Ventana emergente Haz clic para ampliar (<PLACEHOLDER>)",
        "keyGamearia": "Avances e imágenes de jugabilidad",
        "keyThumbnailaria": "Miniaturas de avances e imágenes de jugabilidad",
        "keyThumbnailproductaria": "Miniaturas de imágenes y videos",
        "keyProductaria": "Galería de imágenes y videos del producto"
      },
      "es-co": {
        "keyAriawatch": "Reproducir video:",
        "keyPlay": "Reproducir",
        "keyDialogbox": "cuadro de diálogo",
        "keySeeimage": "Ver imagen",
        "keyClosedialog": "Cerrar diálogo",
        "keyClickenlarge": "Ventana emergente Haz clic para ampliar (<PLACEHOLDER>)",
        "keyGamearia": "Avances e imágenes de jugabilidad",
        "keyThumbnailaria": "Miniaturas de avances e imágenes de jugabilidad",
        "keyThumbnailproductaria": "Miniaturas de imágenes y videos",
        "keyProductaria": "Galería de imágenes y videos del producto"
      },
      "es-es": {
        "keyAriawatch": "Reproduce el vídeo:",
        "keyPlay": "Reproducir",
        "keyDialogbox": "cuadro de diálogo",
        "keySeeimage": "Ver imagen",
        "keyClosedialog": "Cerrar cuadro de diálogo",
        "keyClickenlarge": "Ventana emergente Haz clic para ampliar (<PLACEHOLDER>)",
        "keyGamearia": "Tráileres e imágenes del juego",
        "keyThumbnailaria": "Miniaturas de tráileres e imágenes del juego",
        "keyThumbnailproductaria": "Miniaturas de imágenes y vídeos",
        "keyProductaria": "Galería de imágenes y vídeos de productos"
      },
      "es-mx": {
        "keyAriawatch": "Reproducir video:",
        "keyPlay": "Reproducir",
        "keyDialogbox": "cuadro de diálogo",
        "keySeeimage": "Ver imagen",
        "keyClosedialog": "Cerrar diálogo",
        "keyClickenlarge": "Ventana emergente Haz clic para ampliar (<PLACEHOLDER>)",
        "keyGamearia": "Avances e imágenes de jugabilidad",
        "keyThumbnailaria": "Miniaturas de avances e imágenes de jugabilidad",
        "keyThumbnailproductaria": "Miniaturas de imágenes y videos",
        "keyProductaria": "Galería de imágenes y videos del producto"
      },
      "fi-fi": {
        "keyAriawatch": "Katso video:",
        "keyPlay": "Toista",
        "keyDialogbox": "valintaruutu",
        "keySeeimage": "Katso kuva",
        "keyClosedialog": "Sulje valintaikkuna",
        "keyClickenlarge": "suurenna ponnahdusikkuna (<PLACEHOLDER>) napsauttamalla",
        "keyGamearia": "Trailereita ja pelikuvaa",
        "keyThumbnailaria": "Pikkukuvia trailereista ja pelikuvista",
        "keyThumbnailproductaria": "Pikkukuvia kuvista ja videoista",
        "keyProductaria": "Tuotekuva- ja -videogalleria"
      },
      "fr-be": {
        "keyAriawatch": "Lire la vidéo :",
        "keyPlay": "Lire",
        "keyDialogbox": "boîte de dialogue",
        "keySeeimage": "Voir l'image",
        "keyClosedialog": "Fermer la boîte de dialogue",
        "keyClickenlarge": "cliquez pour agrandir (<PLACEHOLDER>) la boîte de dialogue Windows",
        "keyGamearia": "Bandes-annonces et images de gameplay",
        "keyThumbnailaria": "Vignettes de bandes-annonces et images de gameplay",
        "keyThumbnailproductaria": "Vignettes d’images et de vidéos",
        "keyProductaria": "Galerie d'images et de vidéo du produit"
      },
      "fr-ca": {
        "keyAriawatch": "Faire jouer la vidéo :",
        "keyPlay": "Jouez",
        "keyDialogbox": "boîte de dialogue",
        "keySeeimage": "Voir l’image",
        "keyClosedialog": "Fermer la fenêtre",
        "keyClickenlarge": "cliquez pour agrandir la fenêtre contextuelle (<PLACEHOLDER>)",
        "keyGamearia": "Bandes-annonces et images du jeu",
        "keyThumbnailaria": "Vignettes de bandes-annonces et images du jeu",
        "keyThumbnailproductaria": "Vignettes d’images et de vidéos",
        "keyProductaria": "Galerie d’images et de vidéos de produits"
      },
      "fr-ch": {
        "keyAriawatch": "Lire la vidéo :",
        "keyPlay": "Lire",
        "keyDialogbox": "boîte de dialogue",
        "keySeeimage": "Voir l'image",
        "keyClosedialog": "Fermer la boîte de dialogue",
        "keyClickenlarge": "cliquez pour agrandir (<PLACEHOLDER>) la boîte de dialogue Windows",
        "keyGamearia": "Bandes-annonces et images de gameplay",
        "keyThumbnailaria": "Vignettes de bandes-annonces et images de gameplay",
        "keyThumbnailproductaria": "Vignettes d’images et de vidéos",
        "keyProductaria": "Galerie d'images et de vidéo du produit"
      },
      "fr-fr": {
        "keyAriawatch": "Lire la vidéo :",
        "keyPlay": "Lire",
        "keyDialogbox": "boîte de dialogue",
        "keySeeimage": "Voir l'image",
        "keyClosedialog": "Fermer la boîte de dialogue",
        "keyClickenlarge": "cliquez pour agrandir (<PLACEHOLDER>) la boîte de dialogue Windows",
        "keyGamearia": "Bandes-annonces et images de gameplay",
        "keyThumbnailaria": "Vignettes de bandes-annonces et images de gameplay",
        "keyThumbnailproductaria": "Vignettes d’images et de vidéos",
        "keyProductaria": "Galerie d'images et de vidéo du produit"
      },
      "he-il": {
        "keyAriawatch": "Play the video:",
        "keyPlay": "Play",
        "keyDialogbox": "dialog box",
        "keySeeimage": "See image",
        "keyClosedialog": "Close dialog",
        "keyClickenlarge": "click to enlarge (<PLACEHOLDER>) popup window",
        "keyGamearia": "Trailers and gameplay images",
        "keyThumbnailaria": "Thumbnails of trailers and gameplay images",
        "keyThumbnailproductaria": "Thumbnails of images and videos",
        "keyProductaria": "Gallery of product images and videos"
      },
      "hu-hu": {
        "keyAriawatch": "A videó lejátszása:",
        "keyPlay": "Lejátszás",
        "keyDialogbox": "párbeszédpanel",
        "keySeeimage": "Kép megtekintése",
        "keyClosedialog": "Párbeszédpanel bezárása",
        "keyClickenlarge": "kattintson ide a(z) (<PLACEHOLDER>) előugró ablak kinagyításához",
        "keyGamearia": "Előzetesek és játékmenetképek",
        "keyThumbnailaria": "Előzetesek és játékmenetképek miniatűrjei",
        "keyThumbnailproductaria": "Képek és videók miniatűrjei",
        "keyProductaria": "Termékképek és -videók galériája"
      },
      "it-it": {
        "keyAriawatch": "Riproduci il video:",
        "keyPlay": "Riproduci",
        "keyDialogbox": "finestra",
        "keySeeimage": "Visualizza immagine",
        "keyClosedialog": "Chiudi finestra",
        "keyClickenlarge": "fai clic per ingrandire la finestra popup (<PLACEHOLDER>)",
        "keyGamearia": "Trailer e immagini del gioco",
        "keyThumbnailaria": "Miniature di trailer e immagini di modalità di gioco",
        "keyThumbnailproductaria": "Miniature di immagini e video",
        "keyProductaria": "Galleria di immagini e video dei prodotti"
      },
      "ja-jp": {
        "keyAriawatch": "動画をプレイ:",
        "keyPlay": "再生する",
        "keyDialogbox": "ダイアログ ボックス",
        "keySeeimage": "イメージを見る",
        "keyClosedialog": "ダイアログを閉じる",
        "keyClickenlarge": "クリックして(<PLACEHOLDER>)ウィンドウを拡大する",
        "keyGamearia": "トレーラーとゲームプレイ画像",
        "keyThumbnailaria": "トレーラーとゲームプレイ画像のサムネイル",
        "keyThumbnailproductaria": "画像と動画のサムネイル",
        "keyProductaria": "製品画像とビデオ ギャラリー"
      },
      "ko-kr": {
        "keyAriawatch": "비디오 재생:",
        "keyPlay": "플레이",
        "keyDialogbox": "대화 상자",
        "keySeeimage": "이미지 보기",
        "keyClosedialog": "대화 상자 닫기",
        "keyClickenlarge": "클릭하여 (<PLACEHOLDER>) 팝업창 확대하기",
        "keyGamearia": "트레일러 및 게임 플레이 이미지",
        "keyThumbnailaria": "트레일러와 게임플레이 이미지 썸네일",
        "keyThumbnailproductaria": "이미지와 비디오 썸네일",
        "keyProductaria": "제품 이미지 및 영상 갤러리"
      },
      "nb-no": {
        "keyAriawatch": "Spill videoen:",
        "keyPlay": "Spill",
        "keyDialogbox": "dialogboks",
        "keySeeimage": "Se bilde",
        "keyClosedialog": "Lukk dialogboks",
        "keyClickenlarge": "klikk for å forstørre (<PLACEHOLDER>) popup-vindu",
        "keyGamearia": "Trailere og bilder av spillet",
        "keyThumbnailaria": "Miniatyrbilder av trailere og bilder av spillet",
        "keyThumbnailproductaria": "Miniatyrbilder av bilder og videoer",
        "keyProductaria": "Galleri av produktbilder og videoer"
      },
      "nl-be": {
        "keyAriawatch": "Speel de video af:",
        "keyPlay": "Spelen",
        "keyDialogbox": "dialoogvenster",
        "keySeeimage": "Bekijk afbeelding",
        "keyClosedialog": "Dialoogvenster sluiten",
        "keyClickenlarge": "klik om pop-upvenster (<PLACEHOLDER>) te vergroten",
        "keyGamearia": "Trailers en gameplay-afbeeldingen",
        "keyThumbnailaria": "Miniaturen van trailers en gameplay-afbeeldingen",
        "keyThumbnailproductaria": "Miniaturen van afbeeldingen en video's",
        "keyProductaria": "Galerij van productafbeeldingen en video's"
      },
      "nl-nl": {
        "keyAriawatch": "Speel de video af:",
        "keyPlay": "Spelen",
        "keyDialogbox": "dialoogvenster",
        "keySeeimage": "Bekijk afbeelding",
        "keyClosedialog": "Dialoogvenster sluiten",
        "keyClickenlarge": "klik om pop-upvenster (<PLACEHOLDER>) te vergroten",
        "keyGamearia": "Trailers en gameplay-afbeeldingen",
        "keyThumbnailaria": "Miniaturen van trailers en gameplay-afbeeldingen",
        "keyThumbnailproductaria": "Miniaturen van afbeeldingen en video's",
        "keyProductaria": "Galerij van productafbeeldingen en video's"
      },
      "pl-pl": {
        "keyAriawatch": "Odtwórz wideo:",
        "keyPlay": "Odtwórz",
        "keyDialogbox": "okno dialogowe",
        "keySeeimage": "Patrz obraz",
        "keyClosedialog": "Zamknij okno dialogowe",
        "keyClickenlarge": "kliknij, aby powiększyć okno podręczne (<PLACEHOLDER>)",
        "keyGamearia": "Grafiki przedstawiające zwiastuny i fragmenty rozgrywki",
        "keyThumbnailaria": "Miniatury zwiastunów i obrazów z rozgrywki",
        "keyThumbnailproductaria": "Miniatury obrazów i filmów",
        "keyProductaria": "Galeria zdjęć i filmów o produkcie"
      },
      "pt-br": {
        "keyAriawatch": "Veja o vídeo:",
        "keyPlay": "Jogar",
        "keyDialogbox": "caixa de diálogo",
        "keySeeimage": "Veja a imagem",
        "keyClosedialog": "Fechar caixa de diálogo",
        "keyClickenlarge": "clique para ampliar (<PLACEHOLDER>) a janela pop-up",
        "keyGamearia": "Trailers e imagens do gameplay",
        "keyThumbnailaria": "Miniaturas de trailers e imagens de jogo",
        "keyThumbnailproductaria": "Miniaturas de imagens e vídeos",
        "keyProductaria": "Galeria de imagens e vídeos dos produtos"
      },
      "pt-pt": {
        "keyAriawatch": "Reproduzir o vídeo:",
        "keyPlay": "Reproduzir",
        "keyDialogbox": "caixa de diálogo",
        "keySeeimage": "Ver imagem",
        "keyClosedialog": "Fechar caixa de diálogo",
        "keyClickenlarge": "clicar para ampliar a janela de pop-up (<PLACEHOLDER>)",
        "keyGamearia": "Trailers e imagens do jogo",
        "keyThumbnailaria": "Miniaturas de trailers e imagens da mecânica de jogo",
        "keyThumbnailproductaria": "Miniaturas de imagens e vídeos",
        "keyProductaria": "Galeria de imagens e vídeos de produtos"
      },
      "ru-ru": {
        "keyAriawatch": "Воспроизвести видео:",
        "keyPlay": "Воспроизвести",
        "keyDialogbox": "диалоговое окно",
        "keySeeimage": "Смотреть изображение",
        "keyClosedialog": "Закрыть диалоговое окно",
        "keyClickenlarge": "нажмите, чтобы увеличить размер всплывающего окна (<PLACEHOLDER>)",
        "keyGamearia": "Анонсы и изображения геймплея",
        "keyThumbnailaria": "Эскизы трейлеров и изображений игрового процесса",
        "keyThumbnailproductaria": "Эскизы изображений и видео",
        "keyProductaria": "Галерея видеороликов и изображений продуктов"
      },
      "sk-sk": {
        "keyAriawatch": "Prehrať video:",
        "keyPlay": "Prehrať",
        "keyDialogbox": "dialógové okno",
        "keySeeimage": "Zobraziť obrázok",
        "keyClosedialog": "Zavrieť dialógové okno",
        "keyClickenlarge": "kliknutím zväčšiť kontextovú ponuku okna (<PLACEHOLDER>)",
        "keyGamearia": "Upútavky a obrázky z hry",
        "keyThumbnailaria": "Miniatúry upútaviek a scén z hier",
        "keyThumbnailproductaria": "Miniatúry obrázkov a videí",
        "keyProductaria": "Galéria obrázkov a videí produktov"
      },
      "sv-se": {
        "keyAriawatch": "Spela upp videon:",
        "keyPlay": "Spela",
        "keyDialogbox": "dialogruta",
        "keySeeimage": "Se bild",
        "keyClosedialog": "Stäng dialogruta",
        "keyClickenlarge": "klicka för att förstora (<PLACEHOLDER>) popup-fönstret",
        "keyGamearia": "Trailers och gameplay",
        "keyThumbnailaria": "Miniatyrbilder av trailers och gameplay-bilder",
        "keyThumbnailproductaria": "Miniatyrbilder av bilder och videor",
        "keyProductaria": "Ett galleri med produktbilder och videoklipp"
      },
      "tr-tr": {
        "keyAriawatch": "Videoyu oynatın:",
        "keyPlay": "Oynatın",
        "keyDialogbox": "iletişim kutusu",
        "keySeeimage": "Görüntüye göz atın",
        "keyClosedialog": "İletişim kutusunu kapatın",
        "keyClickenlarge": "büyütmek için tıklayın (<PLACEHOLDER>) açılır penceresi",
        "keyGamearia": "Tanıtım videoları ve oynanış görüntüleri",
        "keyThumbnailaria": "Tanıtım videolarının ve oynanış görüntülerinin küçük resimleri",
        "keyThumbnailproductaria": "Görüntülerin ve videoların küçük resimleri",
        "keyProductaria": "Ürün görüntülerinden ve videolarından oluşan galeri"
      },
      "zh-cn": {
        "keyAriawatch": "播放影片：",
        "keyPlay": "畅玩",
        "keyDialogbox": "对话框",
        "keySeeimage": "查看图像",
        "keyClosedialog": "关闭对话框",
        "keyClickenlarge": "单击可放大（<PLACEHOLDER>）图片",
        "keyGamearia": "預告與遊戲影像",
        "keyThumbnailaria": "预告片和游戏图像的缩略图",
        "keyThumbnailproductaria": "图像和视频的缩略图",
        "keyProductaria": "產品影像和影片藝廊"
      },
      "zh-hk": {
        "keyAriawatch": "播放影片：",
        "keyPlay": "播放",
        "keyDialogbox": "對話方塊",
        "keySeeimage": "查看影像",
        "keyClosedialog": "關閉對話",
        "keyClickenlarge": "按一下以放大 (<PLACEHOLDER>) 彈出式視窗",
        "keyGamearia": "預告與遊戲影像",
        "keyThumbnailaria": "預告與遊戲影像的縮圖",
        "keyThumbnailproductaria": "預告與影片的縮圖",
        "keyProductaria": "產品影像和影片藝廊"
      },
      "zh-tw": {
        "keyAriawatch": "觀賞",
        "keyPlay": "播放",
        "keyDialogbox": "對話方塊",
        "keySeeimage": "查看影像",
        "keyClosedialog": "關閉對話",
        "keyClickenlarge": "按一下以放大 (<PLACEHOLDER>) 彈出式視窗",
        "keyGamearia": "預告片與遊戲內容影像",
        "keyThumbnailaria": "預告片與遊戲歷程影像縮圖",
        "keyThumbnailproductaria": "影像與影片縮圖",
        "keyProductaria": "產品影像和影片藝廊"
      }
    }
  }
  $(document).ready(function(){
    //DAM video removal
    const removeDamVideos = false;
    if (removeDamVideos === true) {
      $(".OttoGallery[data-otto-iframe-src*='videoplayer/embed']").remove()

      $(".OttoFilmstrip div[data-otto-video]").each(function() {
        if ($(this).attr("data-otto-video").length === 6 || $(this).attr("data-otto-video").length === 7) {
          $(this).remove();
        }
      })
    }
    // end DAM video removal

    //AEM video removal
    const removeAemVideos = false;
    if (removeAemVideos === true) {
      $(".OttoFilmstrip div[data-otto-video]").each(function() {
        if ($(this).attr("data-otto-video").length === 36) {
          $(this).remove();
        }
      })
      $("[data-otto-video]").each(function() {
        if ($(this).attr("data-otto-video").length === 36) {
          $(this).remove();
        }
      })
    }
    // end AEM video removal

    var youtubeorigin = window.location.host;
    function OttoLightboxes(inline) {
      // youtube/dam switching
      if ($(".OttoGallery[data-otto-youtubeid][data-otto-iframe-src]").length > 0) {
        var dualcount = $(".OttoGallery[data-otto-youtubeid][data-otto-iframe-src]").length;
        var dualcounter = 0;
        $(".OttoGallery[data-otto-youtubeid][data-otto-iframe-src]").each(function() {
          var currentgallery = this;
          // test DAM video
          var thisiframesrc = $(currentgallery).data("otto-iframe-src");
          var thisvidid = thisiframesrc.split("/")[6].split("?")[0]
          // var jsonurlraw = "https://video.cascade.microsoft.com/api/og/xbox/videos/GUID/playback-info"
          if (Object.keys(videoData).includes(thisvidid)) {
            console.log("removing youtube")
            $(currentgallery).removeAttr("data-otto-youtubeid");
          } else {
            $(currentgallery).removeAttr("data-otto-iframe-src");
          }
          dualcounter++;
          if (dualcounter === dualcount) {
            runLightBoxes();
          }
          // console.log(jsonurlraw.replace("GUID", thisvidid))
          // $.get(jsonurlraw.replace("GUID", thisvidid))
          //   .done(function() {
          //     console.log("removing youtube")
          //       $(currentgallery).removeAttr("data-otto-youtubeid");
          //     })
          //   .fail(function() {
          //       $(currentgallery).removeAttr("data-otto-iframe-src");
          //     })
          //   .always(function() {
          //     dualcounter++;
          //     if (dualcounter === dualcount) {
          //       runLightBoxes();
          //     }
          //   })
        })
      } else if ($(".OttoGallery[data-otto-youtubeid][data-otto-video]").length > 0) {
        var dualcount = $(".OttoGallery[data-otto-youtubeid][data-otto-video]").length;
        var dualcounter = 0;
        $(".OttoGallery[data-otto-youtubeid][data-otto-video]").each(function() {
          var currentgallery = this;
          // test DAM video
          var thisvidid = $(currentgallery).data("otto-video");
          // var jsonurlraw = "https://video.cascade.microsoft.com/api/og/xbox/videos/GUID/playback-info"
          // console.log(jsonurlraw.replace("GUID", thisvidid))
          if (Object.keys(videoData).includes(thisvidid)) {
            console.log("removing youtube")
            $(currentgallery).removeAttr("data-otto-youtubeid");
          } else {
            $(currentgallery).removeAttr("data-otto-video");
          }
          dualcounter++;
          if (dualcounter === dualcount) {
            runLightBoxes();
          }
          // $.get(jsonurlraw.replace("GUID", thisvidid))
          //   .done(function() {
          //     console.log("removing youtube")
          //       $(currentgallery).removeAttr("data-otto-youtubeid");
          //     })
          //   .fail(function() {
          //       $(currentgallery).removeAttr("data-otto-video");
          //     })
          //   .always(function() {
          //     dualcounter++;
          //     if (dualcounter === dualcount) {
          //       runLightBoxes();
          //     }
          //   })
        })
      } else {
        if (window.runOttoLbOnce === undefined) {
          const runOttoLbOnce = {
            runlb: function() {
              runLightBoxes();
            }
          }
          runOttoLbOnce.runlb();
        }
      }

      // inline functionality
      if (inline === "inline") {

      }
      function runLightBoxes() {
        let lbtabonly = 0;
        $(".OttoGallery[data-otto-type='lightbox']").on("keydown", function(event) {
          if((event.keyCode == 13) || (event.keyCode== 32)){
            if (lbtabonly === 0) {
              event.preventDefault();
              lightboxopentype = "tabbed"
              $(this).click(); 
              lbtabonly = 1;
            }       
          }
        })
        //document.domain = "xbox.com";
        var uri = new URL(document.URL);
        var urlRegion = uri.pathname.slice(1,6).toLowerCase();
        var userAgentString = navigator.userAgent; // detect browser (for IE YouTube swipe issue)
        var youtubeorigin = window.location.host;
        var categoryList = [];
        var lightboxopentype = "";
        var escapeflag = 0;
       $(".OttoGallery").each(function(currentgalleryindex) {
        var currentgallery = this;
        if ($(currentgallery).attr("data-otto-thumbnav") == "off") {
         var thumbnav = "off"
        } else {
         var thumbnav = "on"
        }

        // set up aspect ratio
        var ottoAspect = "16x9";
        if ($(currentgallery).attr("data-otto-aspect-ratio")) {
          ottoAspect = $(currentgallery).attr("data-otto-aspect-ratio").toLowerCase();
        } else {
          ottoAspect = "16x9";
        }

        // set up categories
        var ottoCategories = "off";

          $(currentgallery).find("ul").eq(0).addClass("mainSlick mainSlick" + currentgalleryindex)

          // slide function
          // arrow colors
          var mainarrowcolor = "#f3f3f3";
          var thumbnailarrowcolor = "#f3f3f3";
          if ($(currentgallery).data("otto-mainarrowcolor")) {
            mainarrowcolor = $(currentgallery).data("otto-mainarrowcolor");
          } 
          if ($(currentgallery).data("otto-thumbnailarrowcolor")) {
            thumbnailarrowcolor = $(currentgallery).data("otto-thumbnailarrowcolor");
          } 

          // determine gallery type
          var gallerytype = $(currentgallery).data("otto-type");

          // data-otto-type
          if (gallerytype == "lightbox") {
            //// begin lightbox type gallery ////
            var lightboxid = $(currentgallery).attr("id");
            var targetdiv = $(currentgallery).data("otto-targetdivid");
            var lightboxcontainer = $(currentgallery).attr("data-otto-lightbox-container");
            var textcontainer = $(currentgallery).data("otto-text-desc-id");
            var altaudioid = $(currentgallery).data("otto-alt-audio-youtubeid");
            var ottoidtitle;

            if ($(currentgallery).attr("data-otto-generated") !== "true" && $(currentgallery).attr("data-otto-iframe-src") !== undefined && 
              $(currentgallery).attr("data-otto-iframe-src").toLowerCase().indexOf("videoplayer/embed") !== -1) {
              var vidguidarray = $(currentgallery).attr("data-otto-iframe-src").split("/");
              var vidguid = vidguidarray[vidguidarray.length - 1].split("?")[0];
              // var jsonurlraw = "https://video.cascade.microsoft.com/api/og/xbox/videos/GUID/playback-info"
              var thisvidtitle = videoData[vidguid].videoTitle;
              var thisvidname = videoData[vidguid].videoTitle;
              ottoaria(thisvidtitle, thisvidname);
              //ottotitle(thisvidname)
              ottoidtitle = thisvidname;
            
              // $.get(jsonurlraw.replace("GUID", vidguid))
              //   .done(function(responseData) {
              //     var thisvidtitle = responseData.videoTitle;
              //     var thisvidname = responseData.videoTitle;
              //     ottoaria(thisvidtitle, thisvidname);
              //     //ottotitle(thisvidname)
              //     ottoidtitle = thisvidname;
              //   })
              function ottoaria(title, name) {
                var ot = ottotext.locales[urlRegion];
                if ($(currentgallery).attr("data-otto-aria-ignore") != "true"){
                    $(currentgallery).attr("aria-label", ot["keyAriawatch"] + ' ' + name);
                }
                $(currentgallery).attr("data-otto-thevidname", name);
              }
              // function ottotitle(name) {
              //   $(".lightboxcontent").attr("aria-label", name);
              // }

            }

            if ($(currentgallery).attr("data-otto-generated") !== "true" && $(currentgallery).attr("data-otto-video") !== undefined) { // ump lightbox
              var vidguid = $(currentgallery).attr("data-otto-video");
              var thisvidtitle = videoData[vidguid]["videoTitle"];
              var thisvidname = videoData[vidguid]["videoTitle"];
              ottoaria(thisvidtitle, thisvidname);
              //ottotitle(thisvidname)
              ottoidtitle = thisvidname;
              function ottoaria(title, name) {
                var ot = ottotext.locales[urlRegion];
                if ($(currentgallery).attr("data-otto-aria-ignore") != "true"){
                    $(currentgallery).attr("aria-label", ot["keyAriawatch"] + ' ' + name);
                }
                $(currentgallery).attr("data-otto-thevidname", name);
              }
            }

            if ($(currentgallery).data("otto-lightbox-vid-vertical-placement")) {
              var lightboxvertical = $(currentgallery).data("otto-lightbox-vid-vertical-placement");
            } else {
              var lightboxvertical = "-17%";
            }

            if ($(currentgallery).attr("src")) {
              var imgsrc = $(currentgallery).attr("src"); 
            } else {
              var imgsrc = "https://assets.xboxservices.com/assets/0f/8e/0f8ec64d-27e7-49cd-b8c8-ceb0d239b334.png?n=playbutton.png";
            }
            $(currentgallery).attr("src", imgsrc);
            $(currentgallery).addClass("lightboxplaybutton");

            function opennewwindow() {
              if ($(currentgallery).data("otto-youtubeid")) {

                var youtubeid = $(currentgallery).data("otto-youtubeid");

                // Atlas tracking - YouTube play tracking only NOTE: xbtracker.js not required
                if ($(currentgallery).data("otto-xbtrackeratlas")) {
                  var youtubeatlastag = $(currentgallery).data("otto-xbtrackeratlas");
                  // console.log(youtubeatlastag);
                  $.ajax({
                    url: "http://view.atdmt.com/jaction/" + youtubeatlastag,
                    dataType:"jsonp"
                  });
                }
                
                if (userAgentString.indexOf("iPhone") >= 0) { // if browser is iPhone
                  $("body").append("<a id='ytclick' target='_blank' style='display: none;' href='https://www.youtube-nocookie.com/embed/" + 
                                   youtubeid + "?id=" + youtubeid + "&amp;rel=0&amp;origin=https%3A%2F%2Fwww.xbox.com'></a>");
                  $("#ytclick")[0].click();
                  //console.log("open new window for youtube?")
                } else {
                  window.open('https://www.youtube-nocookie.com/embed/' + youtubeid + '?id=' + youtubeid + '&amp;rel=0&amp;origin=https%3A%2F%2Fwww.xbox.com');
                }

              } else if ($(currentgallery).data("otto-htmlfivevideoname")) {
                if ($(currentgallery).data("otto-xbtrackeratlas")) {
                  var htmlatlastag = $(currentgallery).data("otto-xbtrackeratlas");
                  // console.log(youtubeatlastag);
                  $.ajax({
                    url: "http://view.atdmt.com/jaction/" + htmlatlastag,
                    dataType:"jsonp"
                  });
                }
                var html5mp4 = $(currentgallery).data("otto-video-mp4");
                window.open(html5mp4);
                
              } else if ($(currentgallery).data("otto-wirewaxid")) {
                if ($(currentgallery).data("otto-xbtrackeratlas")) {
                  var wirewaxatlastag = $(currentgallery).data("otto-xbtrackeratlas");
                  // console.log(youtubeatlastag);
                  $.ajax({
                    url: "http://view.atdmt.com/jaction/" + wirewaxatlastag,
                    dataType:"jsonp"
                  });
                }
                var wirewaxid = $(currentgallery).data("otto-wirewaxid");
                window.open('http://www.wirewax.com/embed/' + wirewaxid);

              } else if ($(currentgallery).data("otto-zentrickid")) {
                if ($(currentgallery).data("otto-xbtrackeratlas")) {
                  var zentrickatlastag = $(currentgallery).data("otto-xbtrackeratlas");
                  // console.log(youtubeatlastag);
                  $.ajax({
                    url: "http://view.atdmt.com/jaction/" + zentrickatlastag,
                    dataType:"jsonp"
                  });
                }
                var zentrickid = $(currentgallery).data("otto-zentrickid");
                window.open('https://watch.zentrick.com/' + zentrickid);

              } else if ($(currentgallery).data("otto-iframe-src")) {
                if ($(currentgallery).data("otto-xbtrackeratlas")) {
                  var iframeatlastag = $(currentgallery).data("otto-xbtrackeratlas");
                  // console.log(youtubeatlastag);
                  $.ajax({
                    url: "http://view.atdmt.com/jaction/" + iframeatlastag,
                    dataType:"jsonp"
                  });
                }
                var iframesrc = $(currentgallery).data("otto-iframe-src");
                window.open(iframesrc);

              } else if ($(currentgallery).data("otto-ump")) {
                var embed = "https://www.microsoft.com/" + urlRegion + "/videoplayer/embed/" + $(currentgallery).data("otto-ump") + "?autoplay=false"
                window.open(embed)
              }
              $(".lightboxcontent").remove();
            }
            
            $(currentgallery).on("click", function() {
              var closeLightbox = function() {
                  $(".lightboxcontent").remove();
                  $("#page-cover").remove();
                  if ($(currentgallery).data("otto-youtubeid")) {
                     if (typeof(ottoYTTimeCheck) !== 'undefined') {
                    clearInterval(ottoYTTimeCheck);
                  }
                  } else if ($(currentgallery).data("otto-htmlfivevideoname")) {
                    // videojs(uniqueid).dispose();
                  }

                  // restore tab order
                  $("a, area, button, input, object, select, textarea, iframe").attr("tabindex", "0");
                  $("[tabindexold]").each(function() {
                      $(this).attr("tabindex", $(this).attr("tabindexold"))
                  });
                  lbtabonly = 0;
                }

                $(document).on("click", ".lightboxclosebutton", function() {
                  closeLightbox();
                  if ($(currentgallery).find("[tabindex]").length === 0) {
                    $(currentgallery).focus();
                  } else {
                    $(currentgallery).find("[tabindex]").eq(0).focus();
                  }
                });

                $(document).on("keypress", ".lightboxclosebutton", function(event) {
                  if((event.keyCode == 13) || (event.keyCode== 32)){
                    closeLightbox();
                    if ($(currentgallery).find("[tabindex]").length === 0) {
                      $(currentgallery).focus();
                    } else {
                      $(currentgallery).find("[tabindex]").eq(0).focus();
                    }
                  }
                });

                if (escapeflag === 0) {
                  $(document).on("keydown", function(event) {
                    if (event.keyCode === 27) {
                      escapeflag++;
                      if ($(".lightboxclosebutton").length > 0) {
                        $(".lightboxclosebutton").click();

                      }
                    }
                  });
                }
              if ($(window).width() <= 0) {
                opennewwindow();

                $(".lightboxclosebutton").click(function() {
                  $(".lightboxcontent").remove();
                  // console.log("closing lightbox");
                });
              } else {
                var uniqueid = $(currentgallery).data("otto-htmlfivevideoname"); // to unload videojs

                // accessibility
                // make only lightbox tabbable
                $("[tabindex]").each(function() {
                    $(this).attr("tabindexold", $(this).attr("tabindex"))
                    $(this).attr("tabindex", "-1")
                });
                $("a, area, button, input, object, select, textarea, iframe").attr("tabindex", "-1");

                if ($(currentgallery).data("otto-youtubeid")) {

                  var youtubeid = $(currentgallery).data("otto-youtubeid");
                  if ($(currentgallery).data("otto-xbtrackeratlas")) {
                    var atlastag = 'data-otto-xbtrackeratlas="' + $(currentgallery).data("otto-xbtrackeratlas") + '"';
                  } else {
                    var atlastag = "";
                  }              

                  $(currentgallery).before('<div class="lightboxcontent" id="content-' + lightboxid + '" role="dialog">' +
                                           '<div class="lightboxcontainer">' +
                                           '<iframe class="ytplayer lightbox" tabindex="2" id="gallery-' + currentgalleryindex + '-player-' + youtubeid + 
                                           '" type="text/html" ' + atlastag + ' src="https://www.youtube-nocookie.com/embed/' + youtubeid + 
                                           '?enablejsapi=1&origin=https://' + youtubeorigin + '&rel=0"" frameborder="0" allowfullscreen></iframe>' + 
                                           '</div>' +
                                           '<div class="lightboxclosebutton c-glyph glyph-cancel" aria-label="close video window" tabindex="1">' +
                                           // '<img id="lbclosebutton" ' + 
                                           // 'src="https://assets.xboxservices.com/assets/20/08/2008a07c-8854-4deb-a553-345efd1ee3ba.png?n=Global-Resources-UI_X-Button_White-X-Black-Background_43x43.png"' +
                                           '</div>' +
                                           '</div>');
                  $("body").append('<div id="page-cover"></div>');
                  $("#page-cover").show();
                  if (typeof lightboxcontainer !== "undefined") {
                    $(".lightboxcontent").detach().appendTo(lightboxcontainer);
                  } 

                  var accLoc = {
                        "locales": {
                          "en-us": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "ar-ae": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "ar-sa": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "cs-cz": {
                            "keyOpentexttranscript": "OTEVŘÍT TEXTOVÝ PŘEPIS",
                            "keyClosetexttranscript": "ZAVŘÍT TEXTOVÝ PŘEPIS",
                            "keyWatchvideowithaudiode": "SLEDOVAT VIDEO SE ZVUKOVÝM POPISEM",
                            "keyClosevideo": "ZAVŘÍT VIDEO"
                          },
                          "da-dk": {
                            "keyOpentexttranscript": "ÅBN TEKSTAFSKRIFT",
                            "keyClosetexttranscript": "LUK TEKSTAFSKRIFT",
                            "keyWatchvideowithaudiode": "SE VIDEO MED LYDBESKRIVELSE",
                            "keyClosevideo": "LUK VIDEO"
                          },
                          "de-at": {
                            "keyOpentexttranscript": "UNTERTITEL EINBLENDEN",
                            "keyClosetexttranscript": "UNTERTITEL AUSBLENDEN",
                            "keyWatchvideowithaudiode": "VIDEO MIT ERLÄUTERUNGEN ANSEHEN",
                            "keyClosevideo": "VIDEO SCHLIESSEN"
                          },
                          "de-ch": {
                            "keyOpentexttranscript": "UNTERTITEL EINBLENDEN",
                            "keyClosetexttranscript": "UNTERTITEL AUSBLENDEN",
                            "keyWatchvideowithaudiode": "VIDEO MIT ERLÄUTERUNGEN ANSEHEN",
                            "keyClosevideo": "VIDEO SCHLIESSEN"
                          },
                          "de-de": {
                            "keyOpentexttranscript": "UNTERTITEL EINBLENDEN",
                            "keyClosetexttranscript": "UNTERTITEL AUSBLENDEN",
                            "keyWatchvideowithaudiode": "VIDEO MIT ERLÄUTERUNGEN ANSEHEN",
                            "keyClosevideo": "VIDEO SCHLIESSEN"
                          },
                          "el-gr": {
                            "keyOpentexttranscript": "ΑΝΟΙΓΜΑ ΑΠΟΜΑΓΝΗΤΟΦΩΝΗΜΕΝΟΥ ΚΕΙΜΕΝΟΥ",
                            "keyClosetexttranscript": "ΚΛΕΙΣΙΜΟ ΑΠΟΜΑΓΝΗΤΟΦΩΝΗΜΕΝΟΥ ΚΕΙΜΕΝΟΥ",
                            "keyWatchvideowithaudiode": "ΔΕΙΤΕ ΤΟ ΒΙΝΤΕΟ ΜΕ ΗΧΗΤΙΚΗ ΠΕΡΙΓΡΑΦΗ",
                            "keyClosevideo": "ΚΛΕΙΣΤΕ ΤΟ ΒΙΝΤΕΟ"
                          },
                          "en-au": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "en-ca": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "en-gb": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "en-hk": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "en-ie": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "en-in": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "en-nz": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "en-sg": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "en-za": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "es-ar": {
                            "keyOpentexttranscript": "ABRIR TRANSCRIPCIÓN DE TEXTO",
                            "keyClosetexttranscript": "CERRAR TRANSCRIPCIÓN DE TEXTO",
                            "keyWatchvideowithaudiode": "MIRAR VIDEO CON DESCRIPCIÓN DE AUDIO",
                            "keyClosevideo": "CERRAR VIDEO"
                          },
                          "es-cl": {
                            "keyOpentexttranscript": "ABRIR TRANSCRIPCIÓN DE TEXTO",
                            "keyClosetexttranscript": "CERRAR TRANSCRIPCIÓN DE TEXTO",
                            "keyWatchvideowithaudiode": "MIRAR VIDEO CON DESCRIPCIÓN DE AUDIO",
                            "keyClosevideo": "CERRAR VIDEO"
                          },
                          "es-co": {
                            "keyOpentexttranscript": "ABRIR TRANSCRIPCIÓN DE TEXTO",
                            "keyClosetexttranscript": "CERRAR TRANSCRIPCIÓN DE TEXTO",
                            "keyWatchvideowithaudiode": "MIRAR VIDEO CON DESCRIPCIÓN DE AUDIO",
                            "keyClosevideo": "CERRAR VIDEO"
                          },
                          "es-es": {
                            "keyOpentexttranscript": "ABRIR TRANSCRIPCIÓN TEXTUAL",
                            "keyClosetexttranscript": "CERRAR TRANSCRIPCIÓN TEXTUAL",
                            "keyWatchvideowithaudiode": "VER VÍDEO CON DESCRIPCIÓN DE AUDIO",
                            "keyClosevideo": "CERRAR VÍDEO"
                          },
                          "es-mx": {
                            "keyOpentexttranscript": "ABRIR TRANSCRIPCIÓN DE TEXTO",
                            "keyClosetexttranscript": "CERRAR TRANSCRIPCIÓN DE TEXTO",
                            "keyWatchvideowithaudiode": "MIRAR VIDEO CON DESCRIPCIÓN DE AUDIO",
                            "keyClosevideo": "CERRAR VIDEO"
                          },
                          "fi-fi": {
                            "keyOpentexttranscript": "AVAA TEKSTITYS",
                            "keyClosetexttranscript": "SULJE TEKSTITYS",
                            "keyWatchvideowithaudiode": "KATSO VIDEO ÄÄNIKUVAUKSELLA",
                            "keyClosevideo": "SULJE VIDEO"
                          },
                          "fr-be": {
                            "keyOpentexttranscript": "OUVRIR TRANSCRIPTION",
                            "keyClosetexttranscript": "FERMER TRANSCRIPTION",
                            "keyWatchvideowithaudiode": "REGARDER LA VIDÉO AVEC AUDIODESCRIPTION",
                            "keyClosevideo": "FERMER LA VIDÉO"
                          },
                          "fr-ca": {
                            "keyOpentexttranscript": "OUVRIR LA TRANSCRIPTION",
                            "keyClosetexttranscript": "FERMER LA TRANSCRIPTION",
                            "keyWatchvideowithaudiode": "REGARDER LA VIDÉO AVEC DESCRIPTION SONORE",
                            "keyClosevideo": "FERMER LA VIDÉO"
                          },
                          "fr-ch": {
                            "keyOpentexttranscript": "OUVRIR TRANSCRIPTION",
                            "keyClosetexttranscript": "FERMER TRANSCRIPTION",
                            "keyWatchvideowithaudiode": "REGARDER LA VIDÉO AVEC AUDIODESCRIPTION",
                            "keyClosevideo": "FERMER LA VIDÉO"
                          },
                          "fr-fr": {
                            "keyOpentexttranscript": "OUVRIR TRANSCRIPTION",
                            "keyClosetexttranscript": "FERMER TRANSCRIPTION",
                            "keyWatchvideowithaudiode": "REGARDER LA VIDÉO AVEC AUDIODESCRIPTION",
                            "keyClosevideo": "FERMER LA VIDÉO"
                          },
                          "he-il": {
                            "keyOpentexttranscript": "OPEN TEXT TRANSCRIPT",
                            "keyClosetexttranscript": "CLOSE TEXT TRANSCRIPT",
                            "keyWatchvideowithaudiode": "WATCH VIDEO WITH AUDIO DESCRIPTION",
                            "keyClosevideo": "CLOSE VIDEO"
                          },
                          "hu-hu": {
                            "keyOpentexttranscript": "SZÖVEGES ÁTIRAT MEGNYITÁSA",
                            "keyClosetexttranscript": "SZÖVEGES ÁTIRAT BEZÁRÁSA",
                            "keyWatchvideowithaudiode": "VIDEÓ MEGTEKINTÉSE HANGOS LEÍRÁSSAL",
                            "keyClosevideo": "VIDEÓ BEZÁRÁSA"
                          },
                          "it-it": {
                            "keyOpentexttranscript": "APRI TRASCRIZIONE TESTO",
                            "keyClosetexttranscript": "CHIUDI TRASCRIZIONE TESTO",
                            "keyWatchvideowithaudiode": "GUARDA VIDEO CON DESCRIZIONE AUDIO",
                            "keyClosevideo": "CHIUDI VIDEO"
                          },
                          "ja-jp": {
                            "keyOpentexttranscript": "テキスト チャット内容を開く",
                            "keyClosetexttranscript": "テキスト チャット内容を閉じる",
                            "keyWatchvideowithaudiode": "音声による説明付きでビデオを見る",
                            "keyClosevideo": "ビデオを閉じる"
                          },
                          "ko-kr": {
                            "keyOpentexttranscript": "자막 열기",
                            "keyClosetexttranscript": "자막 닫기",
                            "keyWatchvideowithaudiode": "오디오 설명으로 비디오 보기",
                            "keyClosevideo": "비디오 닫기"
                          },
                          "nb-no": {
                            "keyOpentexttranscript": "ÅPNE TEKSTAVSKRIFT",
                            "keyClosetexttranscript": "LUKK TEKSTAVSKRIFT",
                            "keyWatchvideowithaudiode": "SE VIDEO MED LYDBESKRIVELSE",
                            "keyClosevideo": "LUKK VIDEO"
                          },
                          "nl-be": {
                            "keyOpentexttranscript": "TEKSTTRANSCRIPTIE OPENEN",
                            "keyClosetexttranscript": "TEKSTTRANSCRIPTIE SLUITEN",
                            "keyWatchvideowithaudiode": "VIDEO MET AUDIOBESCHRIJVINGEN BEKIJKEN",
                            "keyClosevideo": "VIDEO SLUITEN"
                          },
                          "nl-nl": {
                            "keyOpentexttranscript": "TEKSTTRANSCRIPTIE OPENEN",
                            "keyClosetexttranscript": "TEKSTTRANSCRIPTIE SLUITEN",
                            "keyWatchvideowithaudiode": "VIDEO MET AUDIOBESCHRIJVINGEN BEKIJKEN",
                            "keyClosevideo": "VIDEO SLUITEN"
                          },
                          "pl-pl": {
                            "keyOpentexttranscript": "OTWÓRZ TRANSKRYPCJĘ TEKSTU",
                            "keyClosetexttranscript": "ZAMKNIJ TRANSKRYPCJĘ TEKSTU",
                            "keyWatchvideowithaudiode": "OBEJRZYJ FILM Z OPISEM DŹWIĘKOWYM",
                            "keyClosevideo": "WYŁĄCZ FILM"
                          },
                          "pt-br": {
                            "keyOpentexttranscript": "ABRIR TRANSCRIÇÃO DO TEXTO",
                            "keyClosetexttranscript": "FECHAR TRANSCRIÇÃO DO TEXTO",
                            "keyWatchvideowithaudiode": "ASSISTA AO VÍDEO COM DESCRIÇÃO DO ÁUDIO",
                            "keyClosevideo": "FECHAR VÍDEO"
                          },
                          "pt-pt": {
                            "keyOpentexttranscript": "ABRIR TRANSCRIÇÃO DE TEXTO",
                            "keyClosetexttranscript": "FECHAR TRANSCRIÇÃO DE TEXTO",
                            "keyWatchvideowithaudiode": "VER VÍDEO COM DESCRIÇÃO DE ÁUDIO",
                            "keyClosevideo": "FECHAR VÍDEO"
                          },
                          "ru-ru": {
                            "keyOpentexttranscript": "ОТКРЫТЬ ТЕКСТОВУЮ РАСШИФРОВКУ",
                            "keyClosetexttranscript": "ЗАКРЫТЬ ТЕКСТОВУЮ РАСШИФРОВКУ",
                            "keyWatchvideowithaudiode": "СМОТРЕТЬ ВИДЕО С РАСШИФРОВКОЙ ЗВУКА",
                            "keyClosevideo": "ЗАКРЫТЬ ВИДЕО"
                          },
                          "sk-sk": {
                            "keyOpentexttranscript": "OTVORIŤ PREPIS TEXTU",
                            "keyClosetexttranscript": "ZAVRIEŤ PREPIS TEXTU",
                            "keyWatchvideowithaudiode": "SLEDOVAŤ VIDEO SO ZVUKOVÝM POPISOM",
                            "keyClosevideo": "ZAVRIEŤ VIDEO"
                          },
                          "sv-se": {
                            "keyOpentexttranscript": "ÖPPNA TEXTTRANSKRIPTION",
                            "keyClosetexttranscript": "STÄNG TEXTTRANSKRIPTION",
                            "keyWatchvideowithaudiode": "SE VIDEO MED LJUDBESKRIVNINGAR",
                            "keyClosevideo": "STÄNG VIDEO"
                          },
                          "tr-tr": {
                            "keyOpentexttranscript": "METİN DEŞİFRESİNİ AÇ",
                            "keyClosetexttranscript": "METİN DEŞİFRESİNİ KAPAT",
                            "keyWatchvideowithaudiode": "VİDEOYU SES AÇIKLAMASIYLA BİRLİKTE İZLE",
                            "keyClosevideo": "VİDEOYU KAPAT"
                          },
                          "zh-cn": {
                            "keyOpentexttranscript": "打开文本副本",
                            "keyClosetexttranscript": "关闭文本副本",
                            "keyWatchvideowithaudiode": "观看带音频解说的视频",
                            "keyClosevideo": "关闭视频"
                          },
                          "zh-hk": {
                            "keyOpentexttranscript": "開啟文字抄本稿",
                            "keyClosetexttranscript": "關閉文字抄本稿",
                            "keyWatchvideowithaudiode": "觀看影片連語音說明",
                            "keyClosevideo": "關閉影片"
                          },
                          "zh-tw": {
                            "keyOpentexttranscript": "開啟文字檔",
                            "keyClosetexttranscript": "關閉文字檔",
                            "keyWatchvideowithaudiode": "搭配音訊描述觀賞影片",
                            "keyClosevideo": "關閉影片"
                          }
                        }
                      }

                  var regionaccLoc = accLoc.locales[urlRegion];

                  if (textcontainer !== "" && textcontainer != undefined) {
                    $(".lightboxcontainer").append('<a href="#" class="c-call-to-action c-glyph f-lightweight textDescOpen" aria-label="open text description of video" tabindex="0">' +
                                '<span data-open="' + regionaccLoc["keyOpentexttranscript"] + '" data-close="' + regionaccLoc["keyClosetexttranscript"] + '">' + regionaccLoc["keyOpentexttranscript"] + '</span>' +
                            '</a>');
                    $(".textDescOpen").click(function(e) {
                      e.preventDefault();
                      if ($(this).find("span").text() === $(this).find("span").data("open")) {
                        $(textcontainer).clone().appendTo(".lightboxcontainer");
                        $(".lightboxcontainer .ottoTextDesc").show();
                        $(this).find("span").text($(this).find("span").data("close"));
                      } else {
                        $(".lightboxcontainer " + textcontainer).remove();
                        $(this).find("span").text($(this).find("span").data("open"));
                      }
                    })
                  }
                  if (altaudioid !== "" && altaudioid != undefined) {
                    $(".lightboxcontainer").append('<a href="#" class="c-call-to-action c-glyph f-lightweight altaudioOpen" aria-label="open alternate audio video" tabindex="0">' +
                                '<span data-open="' + regionaccLoc["keyWatchvideowithaudiode"] + '" data-close="' + regionaccLoc["keyClosevideo"] + '">' + regionaccLoc["keyWatchvideowithaudiode"] + '</span>' +
                            '</a>');
                    $(".altaudioOpen").click(function(e) {
                      e.preventDefault();
                      if ($(this).find("span").text() === $(this).find("span").data("open")) {
                        $(".lightboxcontainer iframe").attr("src", 'https://www.youtube-nocookie.com/embed/' + altaudioid + '?enablejsapi=1&origin=https://' + youtubeorigin + '&rel=0')
                        $(this).find("span").text($(this).find("span").data("close"));
                      } else {
                        $(".lightboxcontainer iframe").attr("src", 'https://www.youtube-nocookie.com/embed/' + youtubeid + '?enablejsapi=1&origin=https://' + youtubeorigin + '&rel=0')
                        $(this).find("span").text($(this).find("span").data("open"));
                      }
                    })
                  }


                  // if (lightboxopentype === "tabbed") {
                  //   $(".lightboxclosebutton").focus();
                  //   lightboxopentype = "";
                  // }
                  $(".lightboxclosebutton").first().focus();

                  //onYouTubeLightboxReady();

                } else if ($(currentgallery).data("otto-htmlfivevideoname")) {
                  var html5mp4 = $(currentgallery).data("otto-video-mp4");
                  var html5webm = $(currentgallery).data("otto-video-webm");
                  var html5ogg = $(currentgallery).data("otto-video-ogg");
                  var html5error = "Sorry, your browser does not support this video.";

                  // set up video's preroll image
                  var prerollurl = $(currentgallery).data("otto-videopreroll");
                  if ($(currentgallery).attr("data-otto-videopreroll-time")) {
                    var prerolltime = $(currentgallery).data("otto-videopreroll-time");
                  } else {
                    var prerolltime = 3000;
                  }
                  
                  // video pre-roll
                  // make only lightbox tabbable
                  $("[tabindex]").each(function() {
                      $(this).attr("tabindexold", $(this).attr("tabindex"))
                      $(this).attr("tabindex", "-1")
                  });
                  $("a, area, button, input, object, select, textarea").attr("tabindex", "-1");
                  if ($(currentgallery).attr("data-otto-videopreroll")) {
                    $(currentgallery).before('<div class="lightboxcontent" id="content-' + lightboxid + '" role="dialog">' +
                                             '<div class="lightboxcontainer">' +
                                             '<img id="preroll-' + lightboxid + '" src="' + prerollurl + '" style="width: 100%">' +
                                             '<div class="html5playbuttoncontainerlightbox" aria-label="Play the video">' + 
                                             '<img class="videoplaybutton" src="https://assets.xboxservices.com/assets/0f/8e/0f8ec64d-27e7-49cd-b8c8-ceb0d239b334.png?n=playbutton.png">' + 
                                             '</div>' +
                                             '</div>' +
                                             '<div class="lightboxclosebutton c-glyph glyph-cancel" aria-label="close video window" tabindex="1">' +
                                             // '<img id="lbclosebutton" ' + 
                                             // 'src="https://assets.xboxservices.com/assets/20/08/2008a07c-8854-4deb-a553-345efd1ee3ba.png?n=Global-Resources-UI_X-Button_White-X-Black-Background_43x43.png"' +
                                             '</div>' +
                                             '</div>');
                    $("body").append('<div id="page-cover"></div>');
                    
                    $("#page-cover").show();
                    if (typeof lightboxcontainer !== "undefined") {
                      $(".lightboxcontent").detach().appendTo(lightboxcontainer);
                    } 

                    $(".html5playbuttoncontainerlightbox").click(function() {
                      // console.log("play button clicked")
                      $(".html5playbuttoncontainerlightbox").remove();
                      $("#preroll-" + lightboxid).remove();
                      $(".lightboxcontainer").append('<video tabindex="2" controls id="' + uniqueid + '" class="html5playerlightbox" data-setup="{}" width="auto" height="auto" autoplay><source src="' + 
                                               html5mp4 + '" type="video/mp4"><source src="' + html5webm + '" type="video/webm"><source src="' + 
                                               html5ogg + '" type="video/ogg">' + html5error + '</video>');
                    })

                  } else {

                    $(currentgallery).before('<div class="lightboxcontent" id="content-' + lightboxid + '" role="dialog">' +
                                             '<div class="lightboxcontainer">' +
                                             '<video tabindex="2" controls id="' + uniqueid + '" class="html5playerlightbox" data-setup="{}" width="auto" height="auto"><source src="' + 
                                             html5mp4 + '" type="video/mp4"><source src="' + html5webm + '" type="video/webm"><source src="' + 
                                             html5ogg + '" type="video/ogg">' + html5error + '</video>' + 
                                             '</div>' +
                                             '<div class="lightboxclosebutton c-glyph glyph-cancel" aria-label="close video window" tabindex="1">' +
                                             // '<img id="lbclosebutton" ' + 
                                             // 'src="https://assets.xboxservices.com/assets/20/08/2008a07c-8854-4deb-a553-345efd1ee3ba.png?n=Global-Resources-UI_X-Button_White-X-Black-Background_43x43.png"' +
                                             '</div>' +
                                             '</div>');
                      $(".lightboxclosebutton").first().focus();
                    
                    $("body").append('<div id="page-cover"></div>');
                    $("#page-cover").show();
                    if (typeof lightboxcontainer !== "undefined") {
                      $(".lightboxcontent").detach().appendTo(lightboxcontainer);
                    } 

                  }

                  $(".lightboxclosebutton").first().focus();

                } else if ($(currentgallery).data("otto-wirewaxid")) {

                  var wirewaxid = $(this).data("otto-wirewaxid");
                  ottoidtitle = $(this).data("otto-thevidname");
                  $(currentgallery).before('<div class="lightboxcontent" id="content-' + lightboxid + '" role="dialog" aria-label="' + ottoidtitle + '">' +
                                           '<div class="lightboxcontainer">' +
                                           '<iframe class="wirewaxplayer" src="http://www.wirewax.com/embed/' + wirewaxid + 
                                           '/000000" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen data-appid="XboxWeb"></iframe>' + 
                                           '</div>' +
                                           '<div class="lightboxclosebutton c-glyph glyph-cancel" aria-label="close video window">' +
                                           // '<img id="lbclosebutton" ' + 
                                           // 'src="https://assets.xboxservices.com/assets/20/08/2008a07c-8854-4deb-a553-345efd1ee3ba.png?n=Global-Resources-UI_X-Button_White-X-Black-Background_43x43.png"' +
                                           '</div>' +
                                           '</div>');
                  $("body").append('<div id="page-cover"></div>');
                  $("#page-cover").show();
                  if (typeof lightboxcontainer !== "undefined") {
                    $(".lightboxcontent").detach().appendTo(lightboxcontainer);
                  } 

                } else if ($(currentgallery).data("otto-zentrickid")) {

                  var zentrickid = $(this).data("otto-zentrickid");
                  ottoidtitle = $(this).data("otto-thevidname");
                  $(currentgallery).before('<div class="lightboxcontent" id="content-' + lightboxid + '" role="dialog" aria-label="' + ottoidtitle + '">' +
                                           '<div class="lightboxcontainer">' +
                                           '<iframe class="wirewaxplayer" src="https://watch.zentrick.com/' + zentrickid + 
                                           '" width="100%" height="100%" frameborder="0" scrolling="no" allowfullscreen data-appid="XboxWeb"></iframe>' + 
                                           '</div>' +
                                           '<div class="lightboxclosebutton c-glyph glyph-cancel" aria-label="close video window">' +
                                           // '<img id="lbclosebutton" ' + 
                                           // 'src="https://assets.xboxservices.com/assets/20/08/2008a07c-8854-4deb-a553-345efd1ee3ba.png?n=Global-Resources-UI_X-Button_White-X-Black-Background_43x43.png"' +
                                           '</div>' +
                                           '</div>');
                  $("body").append('<div id="page-cover"></div>');
                  $("#page-cover").show();
                  if (typeof lightboxcontainer !== "undefined") {
                    $(".lightboxcontent").detach().appendTo(lightboxcontainer);
                  } 

                } else if ($(currentgallery).data("otto-iframe-src")) {

                  var umpId = $(this).data("aem-id");
                  var vidtitle = videoData[umpId]["videoTitle"];
                  var vidname = videoData[umpId]["videoTitle"];
                  var vidscreenshot = videoData[umpId]["thumbnailUrl"];
                  var vidalt = videoData[umpId]["thumbnailAlt"];
                  var vidurl = videoData[umpId]["videoDashUrl"];
                  var vidcc = videoData[umpId]["videoCc"];
                  var viddl = videoData[umpId]["videoDl"];
                  var vidminage = videoData[umpId]["videoAgegate"];
                  if (vidminage === null) {
                    vidminage = 0;
                  }

                  $(currentgallery).before('<div class="lightboxcontent" id="content-' + lightboxid + '" role="dialog" aria-modal="true" aria-label="' + ottoidtitle + '">' +
                                           '<button class="lightboxclosebutton lbclose1 c-glyph glyph-cancel" aria-label="close video window" tabindex="0">' +
                                           '</button>' +
                                           '<div class="lightboxcontainer">' +
                                           '<div class="umpLightbox" id="umpVid' + lightboxid + '"></div>' +
                                           '</div>' +
                                           '<div class="lightboxclosebutton lbclose2" tabindex="0" aria-hidden="true">' +
                                           '</div>' +
                                           '</div>');
                  umpElements["element" + lightboxid] = document.createElement("universal-media-player");
                  document.getElementById('umpVid' + lightboxid).appendChild(umpElements["element" + lightboxid]);
                  // setTimeout(function() {
                    umpPlayerOptions["upo" + lightboxid] = function() {
                      return {
                        partnerName: "xbox",
                        autoplay: false,
                        ageGate: {minimumAge: vidminage},
                        title: vidtitle,
                        language: urlRegion,
                        reporting: true,
                        poster: vidscreenshot,
                        sources: [
                          {
                            src: vidurl,
                            type: "DASH",
                            // quality: "HQ",
                          },
                          // {
                          //   src: vidurl,
                          //   type: "video/mp4",
                          //   quality: "HD",
                          // },
                        ],
                        // ccFiles: [
                        //   {
                        //     // url: "https://prod-video-cms-rt-microsoft-com.akamaized.net/cms/api/am/videofiledata/RE4miKs-frfr?ver=7ef1",
                        //     url: vidcc,
                        //     locale: urlRegion,
                        //     ccType: "VTT",
                        //   },
                        // ],
                        downloadableFiles: [
                          {
                            // url: "https://microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-studio/surface-studio-2-video-1080/Studio-2-sizzle_transcript_en-us.txt",
                            url: viddl,
                            locale: urlRegion.split("-")[0],
                            mediaType: "transcript",
                          },
                        ],
                      };
                    }
                    UmpPlayers["player" + lightboxid] = ump(umpElements["element" + lightboxid], umpPlayerOptions["upo" + lightboxid]());  
                  $("body").append('<div id="page-cover"></div>');
                  $("#page-cover").show();
                  if (typeof lightboxcontainer !== "undefined") {
                    $(".lightboxcontent").detach().appendTo(lightboxcontainer);
                  } 
                  $(".lightboxclosebutton").first().focus();
                } else if ($(currentgallery).data("otto-video")) { // otto ump
                  var umpId = $(this).data("otto-video");
                  var vidtitle = videoData[umpId]["videoTitle"];
                  var vidname = videoData[umpId]["videoTitle"];
                  var vidscreenshot = videoData[umpId]["thumbnailUrl"];
                  var vidalt = videoData[umpId]["thumbnailAlt"];
                  var vidurl = videoData[umpId]["videoDashUrl"];
                  var vidcc = videoData[umpId]["videoCc"];
                  var viddl = videoData[umpId]["videoDl"];
                  var vidminage = videoData[umpId]["videoAgegate"];
                  if (vidminage === null) {
                    vidminage = 0;
                  }
                  $(currentgallery).before('<div class="lightboxcontent" id="content-' + lightboxid + '" role="dialog" aria-modal="true" aria-label="' + vidtitle + '">' +
                                           '<button class="lightboxclosebutton lbclose1 c-glyph glyph-cancel" aria-label="close video window" tabindex="0">' +
                                           '</button>' +
                                           '<div class="lightboxcontainer">' +
                                           '<div class="umpLightbox" id="umpVid' + lightboxid + '"></div>' +
                                           '</div>' +
                                           '<div class="lightboxclosebutton lbclose2" tabindex="0" aria-hidden="true">' +
                                           '</div>' +
                                           '</div>');
                      umpElements["element" + lightboxid] = document.createElement("universal-media-player");
                      document.getElementById('umpVid' + lightboxid).appendChild(umpElements["element" + lightboxid]);
                      // setTimeout(function() {
                        umpPlayerOptions["upo" + lightboxid] = function() {
                          return {
                            partnerName: "xbox",
                            autoplay: false,
                            ageGate: {minimumAge: vidminage},
                            title: vidtitle,
                            language: urlRegion,
                            reporting: true,
                            poster: vidscreenshot,
                            sources: [
                              {
                                src: vidurl,
                                type: "DASH",
                                // quality: "HQ",
                              },
                              // {
                              //   src: vidurl,
                              //   type: "video/mp4",
                              //   quality: "HD",
                              // },
                            ],
                            // ccFiles: [
                            //   {
                            //     // url: "https://prod-video-cms-rt-microsoft-com.akamaized.net/cms/api/am/videofiledata/RE4miKs-frfr?ver=7ef1",
                            //     url: vidcc,
                            //     locale: urlRegion,
                            //     ccType: "TTML",
                            //   },
                            // ],
                            downloadableFiles: [
                              {
                                // url: "https://microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-studio/surface-studio-2-video-1080/Studio-2-sizzle_transcript_en-us.txt",
                                url: viddl,
                                locale: urlRegion.split("-")[0],
                                mediaType: "transcript",
                              },
                            ],
                          };
                        }
                        UmpPlayers["player" + lightboxid] = ump(umpElements["element" + lightboxid], umpPlayerOptions["upo" + lightboxid]());  
                      $("body").append('<div id="page-cover"></div>');
                      $("#page-cover").show();
                      if (typeof lightboxcontainer !== "undefined") {
                        $(".lightboxcontent").detach().appendTo(lightboxcontainer);
                      } 
                      $(".lightboxclosebutton").first().focus();

                      checklightboxheight();

                      setTimeout(function() { // with second close button
                        $(".lbclose2")[0].addEventListener("focus", function() {
                          $(".lbclose1")[0].focus()
                        })

                        /*redirect first shift+tab to last input*/
                        $(document).on('keydown', ".lbclose1", function (e) {
                          // keyevent = e;
                          if (e.key === "Tab") {
                            var docurl = document.URL.toLowerCase();
                            if (userAgentString.indexOf("Trident") !== -1 || userAgentString.indexOf("Firefox") !== -1) {
                              if (e.shiftKey) {
                                if ($(".wirewaxplayer").attr("src").toLowerCase().indexOf("xbox.com") === -1 || 
                                     docurl.indexOf("origin-") !== -1) {
                                  e.preventDefault();
                                  setTimeout(function() {
                                    $(".wirewaxplayer")[0].focus();
                                  }, 10)
                                } else {
                                  e.preventDefault();
                                  setTimeout(function() {
                                    if ($("iframe.wirewaxplayer").contents().find(".f-video-trigger").attr("aria-hidden") === "false") {
                                      $("iframe.wirewaxplayer").contents().find("button.f-play-trigger")[0].focus()
                                    } else {
                                      $(".wirewaxplayer").contents().find("button").last()[0].focus();
                                    }
                                    
                                  }, 10)
                                }
                              }
                            } else if (e.shiftKey) {
                              e.preventDefault();
                              e.stopPropagation();
                              if (typeof e.stopImmediatePropagation === "function") e.stopImmediatePropagation();

                              const umpLightboxHost = document.querySelector(".umpLightbox");
                              if (!umpLightboxHost) return;

                              const isVisible = (el) => {
                                if (!el) return false;
                                // ignore hidden containers
                                if (el.closest && el.closest('[aria-hidden="true"], [hidden]')) return false;

                                const style = window.getComputedStyle(el);
                                if (!style || style.display === "none" || style.visibility === "hidden") return false;

                                // must have a box (handles a lot of "exists but not rendered yet" cases)
                                const rects = el.getClientRects ? el.getClientRects() : null;
                                return rects && rects.length > 0;
                              };

                              // Walk light DOM + all OPEN shadow roots and return the first match.
                              const findDeep = (root, selector) => {
                                const seen = new Set();
                                const stack = [root];

                                while (stack.length) {
                                  const node = stack.pop();
                                  if (!node || seen.has(node)) continue;
                                  seen.add(node);

                                  // direct hit
                                  try {
                                    if (node.querySelector) {
                                      const hit = node.querySelector(selector);
                                      if (hit) return hit;
                                    }
                                  } catch (_) {}

                                  // If this is an element with shadowRoot, search inside it too
                                  if (node.nodeType === 1 && node.shadowRoot) {
                                    stack.push(node.shadowRoot);
                                  }

                                  // push children
                                  try {
                                    if (node.querySelectorAll) {
                                      // Use "*" to traverse; we rely on `seen` to avoid loops
                                      node.querySelectorAll("*").forEach((child) => {
                                        if (!seen.has(child)) stack.push(child);
                                        if (child.shadowRoot && !seen.has(child.shadowRoot)) stack.push(child.shadowRoot);
                                      });
                                    }
                                  } catch (_) {}
                                }

                                return null;
                              };

                              // Prefer fullscreen explicitly (multiple selectors), then fall back
                              const fullscreenSelectors = [
                                'button[data-testid="fullscreen-button"]',
                                'button[aria-label="Fullscreen"]',
                                'button[data-tooltip="Fullscreen"]',
                                'button[title="Fullscreen"]'
                              ];

                              const playSelectors = [
                                'button[data-testid="play-button"]',
                                'button[aria-label="Play"]',
                                'button[data-tooltip="Play"]',
                                'button[title="Play"]'
                              ];

                              const focusFirstFound = (selectors) => {
                                const rootToSearch = umpLightboxHost.shadowRoot || umpLightboxHost;

                                for (const sel of selectors) {
                                  const el = findDeep(rootToSearch, sel);
                                  if (isVisible(el)) {
                                    // Defer focus to avoid UMP stealing it in the same keydown tick
                                    requestAnimationFrame(() => {
                                      setTimeout(() => {
                                        try {
                                          el.focus({ preventScroll: true });
                                        } catch (_) {
                                          el.focus();
                                        }
                                      }, 0);
                                    });
                                    return true;
                                  }
                                }
                                return false;
                              };

                              const focusLastFocusableFallback = () => {
                                const rootToSearch = umpLightboxHost.shadowRoot || umpLightboxHost;
                                const focusableSel =
                                  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

                                // Collect focusables in document order within each root we can see.
                                // (Shadow DOM order can be weird; this is only a fallback.)
                                const focusables = [];
                                const seen = new Set();
                                const stack = [rootToSearch];

                                while (stack.length) {
                                  const node = stack.pop();
                                  if (!node || seen.has(node)) continue;
                                  seen.add(node);

                                  try {
                                    if (node.querySelectorAll) {
                                      node.querySelectorAll(focusableSel).forEach((el) => {
                                        if (!seen.has(el) && isVisible(el)) {
                                          seen.add(el);
                                          focusables.push(el);
                                        }
                                      });
                                      node.querySelectorAll("*").forEach((child) => {
                                        if (!seen.has(child)) stack.push(child);
                                        if (child.shadowRoot && !seen.has(child.shadowRoot)) stack.push(child.shadowRoot);
                                      });
                                    }
                                  } catch (_) {}

                                  if (node.nodeType === 1 && node.shadowRoot && !seen.has(node.shadowRoot)) {
                                    stack.push(node.shadowRoot);
                                  }
                                }

                                if (focusables.length) {
                                  const target = focusables[focusables.length - 1];
                                  requestAnimationFrame(() => {
                                    setTimeout(() => {
                                      try {
                                        target.focus({ preventScroll: true });
                                      } catch (_) {
                                        target.focus();
                                      }
                                    }, 0);
                                  });
                                } else {
                                  umpLightboxHost.focus?.();
                                }
                              };

                              // Retry a few times because the control bar can be re-rendering on keydown
                              let attempts = 0;
                              const maxAttempts = 10;

                              const attemptFocus = () => {
                                attempts++;

                                // 1) Always try fullscreen first (your requirement)
                                if (focusFirstFound(fullscreenSelectors)) return;

                                // 2) If fullscreen truly isn't available, fall back to play
                                if (focusFirstFound(playSelectors)) return;

                                // 3) If still nothing and we have retries left, try again shortly
                                if (attempts < maxAttempts) {
                                  setTimeout(attemptFocus, 30);
                                  return;
                                }

                                // 4) Final fallback: last focusable we can see
                                focusLastFocusableFallback();
                              };

                              attemptFocus();
                            }
                          }
                            
                        });

                        $(document).on("click", "#page-cover", function() {
                          $("#page-cover").remove();
                          closeLightbox();
                        }); 
                      }, 250)
                    
                  
                }

                checklightboxheight();

                setTimeout(function() { // with second close button
                  $(".lbclose2")[0].addEventListener("focus", function() {
                    $(".lbclose1")[0].focus()
                  })

                  /*redirect first shift+tab to last input*/
                  $(document).on('keydown', ".lbclose1", function (e) {
                    // keyevent = e;
                    if (e.key === "Tab") {
                      var docurl = document.URL.toLowerCase();
                      if (userAgentString.indexOf("Trident") !== -1 || userAgentString.indexOf("Firefox") !== -1) {
                        if (e.shiftKey) {
                          if ($(".wirewaxplayer").attr("src").toLowerCase().indexOf("xbox.com") === -1 || 
                               docurl.indexOf("origin-") !== -1) {
                            e.preventDefault();
                            setTimeout(function() {
                              $(".wirewaxplayer")[0].focus();
                            }, 10)
                          } else {
                            e.preventDefault();
                            setTimeout(function() {
                              if ($("iframe.wirewaxplayer").contents().find(".f-video-trigger").attr("aria-hidden") === "false") {
                                $("iframe.wirewaxplayer").contents().find("button.f-play-trigger")[0].focus()
                              } else {
                                $(".wirewaxplayer").contents().find("button").last()[0].focus();
                              }
                              
                            }, 10)
                          }
                        }
                      } else if (e.shiftKey) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (typeof e.stopImmediatePropagation === "function") e.stopImmediatePropagation();

                        const umpLightboxHost = document.querySelector(".umpLightbox");
                        if (!umpLightboxHost) return;

                        const isVisible = (el) => {
                          if (!el) return false;
                          // ignore hidden containers
                          if (el.closest && el.closest('[aria-hidden="true"], [hidden]')) return false;

                          const style = window.getComputedStyle(el);
                          if (!style || style.display === "none" || style.visibility === "hidden") return false;

                          // must have a box (handles a lot of "exists but not rendered yet" cases)
                          const rects = el.getClientRects ? el.getClientRects() : null;
                          return rects && rects.length > 0;
                        };

                        // Walk light DOM + all OPEN shadow roots and return the first match.
                        const findDeep = (root, selector) => {
                          const seen = new Set();
                          const stack = [root];

                          while (stack.length) {
                            const node = stack.pop();
                            if (!node || seen.has(node)) continue;
                            seen.add(node);

                            // direct hit
                            try {
                              if (node.querySelector) {
                                const hit = node.querySelector(selector);
                                if (hit) return hit;
                              }
                            } catch (_) {}

                            // If this is an element with shadowRoot, search inside it too
                            if (node.nodeType === 1 && node.shadowRoot) {
                              stack.push(node.shadowRoot);
                            }

                            // push children
                            try {
                              if (node.querySelectorAll) {
                                // Use "*" to traverse; we rely on `seen` to avoid loops
                                node.querySelectorAll("*").forEach((child) => {
                                  if (!seen.has(child)) stack.push(child);
                                  if (child.shadowRoot && !seen.has(child.shadowRoot)) stack.push(child.shadowRoot);
                                });
                              }
                            } catch (_) {}
                          }

                          return null;
                        };

                        // Prefer fullscreen explicitly (multiple selectors), then fall back
                        const fullscreenSelectors = [
                          'button[data-testid="fullscreen-button"]',
                          'button[aria-label="Fullscreen"]',
                          'button[data-tooltip="Fullscreen"]',
                          'button[title="Fullscreen"]'
                        ];

                        const playSelectors = [
                          'button[data-testid="play-button"]',
                          'button[aria-label="Play"]',
                          'button[data-tooltip="Play"]',
                          'button[title="Play"]'
                        ];

                        const focusFirstFound = (selectors) => {
                          const rootToSearch = umpLightboxHost.shadowRoot || umpLightboxHost;

                          for (const sel of selectors) {
                            const el = findDeep(rootToSearch, sel);
                            if (isVisible(el)) {
                              // Defer focus to avoid UMP stealing it in the same keydown tick
                              requestAnimationFrame(() => {
                                setTimeout(() => {
                                  try {
                                    el.focus({ preventScroll: true });
                                  } catch (_) {
                                    el.focus();
                                  }
                                }, 0);
                              });
                              return true;
                            }
                          }
                          return false;
                        };

                        const focusLastFocusableFallback = () => {
                          const rootToSearch = umpLightboxHost.shadowRoot || umpLightboxHost;
                          const focusableSel =
                            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

                          // Collect focusables in document order within each root we can see.
                          // (Shadow DOM order can be weird; this is only a fallback.)
                          const focusables = [];
                          const seen = new Set();
                          const stack = [rootToSearch];

                          while (stack.length) {
                            const node = stack.pop();
                            if (!node || seen.has(node)) continue;
                            seen.add(node);

                            try {
                              if (node.querySelectorAll) {
                                node.querySelectorAll(focusableSel).forEach((el) => {
                                  if (!seen.has(el) && isVisible(el)) {
                                    seen.add(el);
                                    focusables.push(el);
                                  }
                                });
                                node.querySelectorAll("*").forEach((child) => {
                                  if (!seen.has(child)) stack.push(child);
                                  if (child.shadowRoot && !seen.has(child.shadowRoot)) stack.push(child.shadowRoot);
                                });
                              }
                            } catch (_) {}

                            if (node.nodeType === 1 && node.shadowRoot && !seen.has(node.shadowRoot)) {
                              stack.push(node.shadowRoot);
                            }
                          }

                          if (focusables.length) {
                            const target = focusables[focusables.length - 1];
                            requestAnimationFrame(() => {
                              setTimeout(() => {
                                try {
                                  target.focus({ preventScroll: true });
                                } catch (_) {
                                  target.focus();
                                }
                              }, 0);
                            });
                          } else {
                            umpLightboxHost.focus?.();
                          }
                        };

                        // Retry a few times because the control bar can be re-rendering on keydown
                        let attempts = 0;
                        const maxAttempts = 10;

                        const attemptFocus = () => {
                          attempts++;

                          // 1) Always try fullscreen first (your requirement)
                          if (focusFirstFound(fullscreenSelectors)) return;

                          // 2) If fullscreen truly isn't available, fall back to play
                          if (focusFirstFound(playSelectors)) return;

                          // 3) If still nothing and we have retries left, try again shortly
                          if (attempts < maxAttempts) {
                            setTimeout(attemptFocus, 30);
                            return;
                          }

                          // 4) Final fallback: last focusable we can see
                          focusLastFocusableFallback();
                        };

                        attemptFocus();
                      }
                    }
                      
                  });

                  
                }, 250)

                $(".lightboxclosebutton").first().focus();
              } 

              // vertical placement of lightbox video
              $(".lightboxcontent").css("margin-top", lightboxvertical);
              $(document).on("click", "#page-cover", function() {
                $("#page-cover").remove();
                closeLightbox();
              });
            });

            //// end lightbox type gallery ////
          } 

       });

      }
    }
    if ($(".OttoFilmstrip").length === 0) {
      OttoLightboxes();
    }

  var OttoFilmstrips = (function() {
      if (!(document.URL).includes("3000")){
        var urlRegion = document.URL.toLowerCase().split("xbox.com/")[1].slice(0, 5);
      } else{
        var urlRegion = document.URL.toLowerCase().split("xbox.com:3000/")[1].slice(0, 5);;
      }
      var jsonurlraw = "https://video.cascade.microsoft.com/api/og/xbox/videos/GUID/playback-info"
      // var videourlraw = "https://www.microsoft.com/" + urlRegion + "/videoplayer/embed/GUID?autoplay=false";
      var videourlraw = "https://www.microsoft.com/" + urlRegion + "/videoplayer/embed?partnerName=xboxcom&powerCmsVideoId=GUID&ageGate=true"
      var imageurlraw = "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/TID";
      var topAria = ottotext.locales[urlRegion].keyGamearia;
      var thumbnailAria = ottotext.locales[urlRegion].keyThumbnailaria;
        if ($(".OttoFilmstrip").attr("data-otto-type-gallery") === "accessories") {
          topAria = ottotext.locales[urlRegion].keyProductaria;
          thumbnailAria = ottotext.locales[urlRegion].keyThumbnailproductaria;
        }
      $(".OttoFilmstrip").each(function(fsindex) {
        var currentfilmstrip = this;
        $(currentfilmstrip).after('<div class="m-product-placement f-video ottofs' + fsindex + '" data-grid="col-12">' +
                        '<div class="c-carousel f-single-slide" role="region" aria-label="' + thumbnailAria +'">' +
                          '<button class="c-flipper f-previous" aria-hidden="true" tabindex="-1"></button>' +
                          '<button class="c-flipper f-next" aria-hidden="true" tabindex="-1"></button>' +
                          '<div>' +
                            '<ul aria-busy="true" role="tablist" class="c-group"></ul></div></div></div>');
        var numberofitems = $(currentfilmstrip).find("div").length;
        for (var i = 0; i < numberofitems; i++) {
          $(".ottofs" + fsindex + " ul").append('<li class="carLi"></li>');
        }
        var showinlinemedia = false;
        if ($(currentfilmstrip).attr("data-otto-filmstrip-inline") !== undefined && $(currentfilmstrip).attr("data-otto-filmstrip-inline").toLowerCase() === "true") {
          showinlinemedia = true;
        }
        if (showinlinemedia === true) {
          if ($(".OttoIMAnnounce").length === 0) {
            $("body").append('<div style="width:0;height:0;font-size:0;" class="OttoIMAnnounce" aria-live="assertive" data-carouselcurrent="1"></div>');
          }
          $(".ottofs" + fsindex).addClass("inlinefilmstrip")

          var therole = "region";
          // if (navigator.userAgent.indexOf("Firefox") !== -1) {
          //   var therole = "application";
          // }
          $(currentfilmstrip).before('<div class="m-hero ottoinlinemedia ottoinline' + fsindex + '">' +
                                      // '<div class="c-carousel f-multi-slide theme-white" role="application" aria-label="' + topAria + '" aria-live="assertive">' +
                                      '<div class="c-carousel f-multi-slide theme-white" role="' + therole + '" aria-label="' + topAria + '" aria-live="off">' +
                                        '<div class="c-group"><div class="c-sequence-indicator" role="tablist"></div>' +
                                        '<button class="c-action-toggle c-glyph glyph-play f-toggle" data-toggled-label="Pause" data-toggled-glyph="glyph-pause" aria-label="Play" aria-pressed="false"></button></div>' +
                                        '<button class="c-flipper f-previous" aria-label="go to previous gallery item"></button>' +
                                        '<button class="c-flipper f-next" aria-label="go to next gallery item"></button>' +
                                        '<div>' +
                                          '<ul></ul></div>' +
                                        '</div></div>')
          for (var j = 0; j < numberofitems; j++) {
            $(".ottoinline" + fsindex).find("ul").append("<li class='carLi'></li>");
            $(".ottoinline" + fsindex).find(".c-sequence-indicator").append("<button></button>")
          }
          
        }
        $(currentfilmstrip).find("div").each(function(itemindex) {
          var currentitem = this;
          if ($(currentitem).is("[data-otto-video]") && $(currentitem).is("[data-otto-youtubevideo]")) {
            var vidguid = $(currentitem).attr("data-otto-video");
            if (vidguid.length > 6) {
              var thisvidurl = videoData[vidguid]["videoDashUrl"];
              var thisvidscreenshot = videoData[vidguid]["thumbnailUrl"];
              var thisvidalt = videoData[vidguid]["thumbnailAlt"];
              var thisvidtitle = videoData[vidguid]["videoTitle"];
              var thisvidname = videoData[vidguid]["videoTitle"];
              var thisvidcc = videoData[vidguid]["videoCc"];
              var thisviddl = videoData[vidguid]["videoDl"];
              var thisvidminage = videoData[vidguid]["videoAgegate"];
              if (thisvidminage === null) {
                    thisvidminage = 0;
                  }
              populatevid(itemindex, thisvidurl, thisvidscreenshot, thisvidtitle, thisvidname, thisvidcc, thisviddl, thisvidminage, showinlinemedia, thisvidalt);
            } else {
              var thisyoutubeid = $(currentitem).attr("data-otto-youtubevideo");
              var thisvidscreenshot = 'https://i1.ytimg.com/vi/' + thisyoutubeid + '/maxresdefault.jpg';
              // var thisvidscreenshot = '';
              var thisvidtitle = "youtube video";
              var thisvidname = "youtube video";
              populateyt(itemindex, thisyoutubeid, thisvidscreenshot, thisvidtitle, thisvidname, showinlinemedia);
            }
            
          } else if ($(currentitem).is("[data-otto-youtubevideo]")) {
            var thisyoutubeid = $(currentitem).attr("data-otto-youtubevideo");
            var thisvidscreenshot = 'https://i1.ytimg.com/vi/' + thisyoutubeid + '/maxresdefault.jpg';
            // var thisvidscreenshot = '';
            var thisvidtitle = "youtube video";
            var thisvidname = "youtube video";
            populateyt(itemindex, thisyoutubeid, thisvidscreenshot, thisvidtitle, thisvidname, showinlinemedia);
          } else if ($(currentitem).is("[data-otto-video]")) {
            var vidguid = $(currentitem).attr("data-otto-video");
            // console.log("vidguid: " + vidguid)
            var thisvidurl = videoData[vidguid]["videoDashUrl"];
            var thisvidscreenshot = videoData[vidguid]["thumbnailUrl"];
            var thisvidalt = videoData[vidguid]["thumbnailAlt"];
            var thisvidtitle = videoData[vidguid]["videoTitle"];
            var thisvidname = videoData[vidguid]["videoTitle"];
            var thisvidcc = videoData[vidguid]["videoCc"];
            var thisviddl = videoData[vidguid]["videoDl"];
            var thisvidminage = videoData[vidguid]["videoAgegate"];
            if (thisvidminage === null) {
                    thisvidminage = 0;
                  }
            populatevid(itemindex, thisvidurl, thisvidscreenshot, thisvidtitle, thisvidname, thisvidcc, thisviddl, thisvidminage, showinlinemedia, thisvidalt);
          } else if ($(currentitem).is("[data-otto-mp4]")) {
            var vidurl = $(currentitem).attr("data-otto-mp4");
            var vidscreen = $(currentitem).attr("data-otto-mp4screen");
            var vidtitle = $(currentitem).attr("data-otto-mp4title");
            var vidname = $(currentitem).attr("data-otto-mp4desc");
            populatemp4(itemindex, vidurl, vidscreen, vidtitle, vidname, showinlinemedia);
          } else {
            var thisimg = $(currentitem).attr("data-otto-image");
            var thistitle = $(currentitem).attr("data-otto-image-alt");
            populateimg(itemindex, thisimg, thistitle, showinlinemedia);
          }


        })

        function populatevid(vidindex, vidurl, vidscreenshot, vidtitle, vidname, vidcc, viddl, vidminage, showinline, thumbalt) {
          if (showinline === false) {
            var regiontext = ottotext.locales[urlRegion];
            $(".ottofs" + fsindex).find("li").eq(vidindex).attr("role", "none").html('<section role="none" class="m-product-placement-item context-video f-size-large">' +
                '<a href="javascript:void(0)" class="OttoGallery" data-otto-type="lightbox" tabindex="-1" data-otto-generated="true" data-otto-lightbox-container="body" ' +
                  'data-otto-lightbox-vid-vertical-placement="2%" data-otto-iframe-src="' + vidurl + '" id="vidouter' + fsindex + vidindex + '" data-otto-thevidname="' + vidname + '">' +
                  '<picture class="c-image">' +
                    '<source srcset="' + vidscreenshot + '" media="(min-width:0)">' +
                      '<img srcset="" src="' + vidscreenshot + '" alt="' + vidtitle + '">' +
                    '</picture>' +
                  '</a>' +
                  '<a href="javascript:void(0)" class="c-action-trigger c-glyph glyph-play OttoGallery" data-otto-generated="true" id="vidinner' + fsindex + vidindex + '" data-otto-type="lightbox" data-otto-lightbox-container="body" ' +
                    'data-otto-lightbox-vid-vertical-placement="2%" data-otto-iframe-src="' + vidurl + '" aria-label="' + regiontext["keyAriawatch"] + ' ' + vidname + '" role="tab" data-otto-thevidname="' + vidname + '">' +
                    '<span class="x-screen-reader">' + regiontext["keyPlay"] + '</span>' +
                  '</a>' +
                '</section>')
            if ($(".OttoFilmstrip").last().index(".OttoFilmstrip") === fsindex && $(".ottofs" + fsindex + " ul").find("section").length === numberofitems) {
              OttoLightboxes();
            }
          } else {
            var regiontext = ottotext.locales[urlRegion];
            var inlineclass = "";
            if (vidindex === 0) {inlineclass = "inlinefsActive"}
            $(".ottofs" + fsindex).find("li").eq(vidindex).attr("role", "none").html('<section role="none" class="m-product-placement-item context-video f-size-large" data-linkedstrip="media' + fsindex + vidindex + '">' +
                '<a href="javascript:void(0)" class="inlinelink ' + inlineclass + '" data-otto-generated="true" ' +
                  'aria-label="update main gallery with video: ' + vidtitle + '" id="vidouter' + fsindex + vidindex + '" data-otto-thevidname="' + vidname + '" role="tab">' +
                  '<picture class="c-image">' +
                    '<source srcset="' + vidscreenshot + '" media="(min-width:0)">' +
                      '<img srcset="" src="' + vidscreenshot + '" alt="' + thumbalt + '">' +
                    '</picture>' +
                  '</a>' +
                  '<a href="javascript:void(0)" class="c-action-trigger c-glyph glyph-play" tabindex="-1" style="pointer-events:none;cursor:auto;" data-otto-generated="true" id="vidinner' + fsindex + vidindex + '" ' +
                    'aria-hidden="true" aria-label="" role="tab" data-otto-thevidname="' + vidname + '">' +
                    '<span class="x-screen-reader">' + regiontext["keyPlay"] + '</span>' +
                  '</a>' +
                '</section>')
            $(".ottoinline" + fsindex + " .c-sequence-indicator button").eq(vidindex).replaceWith('<button role="tab" aria-selected="true" aria-controls="media' + fsindex + vidindex + '"></button>' +
                                                                          '<span id="" class="c-tooltip" role="tooltip" aria-hidden=""></span>')
            $(".ottoinline" + fsindex + " ul li").eq(vidindex).replaceWith('<li id="media' + fsindex + vidindex + '" class="carLi">' +
                                                '<section class="m-hero-item f-x-center f-y-bottom context-device theme-light vid-container">' +
                                                '<div class="m-ambient-video" id="umpVid' + fsindex + vidindex + '"></div></section></li>')
            if ($(".ottofs" + fsindex + " ul").find("section").length === numberofitems) {
              connectMedia();
            }
            umpElements["element" + fsindex + vidindex] = document.createElement("universal-media-player");
            document.getElementById('umpVid' + fsindex + vidindex).appendChild(umpElements["element" + fsindex + vidindex]);
            setTimeout(function() {
              umpPlayerOptions["upo" + fsindex + vidindex] = function() {
                return {
                  partnerName: "xbox",
                  autoplay: false,
                  ageGate: {minimumAge: vidminage},
                  title: vidtitle,
                  language: urlRegion,
                  reporting: true,
                  poster: vidscreenshot,
                  sources: [
                    {
                      src: vidurl,
                      type: "DASH",
                      // quality: "HQ",
                    },
                    // {
                    //   src: vidurl,
                    //   //src: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/SUR18-Studio2-Sizzle-Video-1080-0x720-3266k",
                    //   type: "video/mp4",
                    //   quality: "HD",
                    // },
                  ],
                  // ccFiles: [
                  //   {
                  //     // url: "https://prod-video-cms-rt-microsoft-com.akamaized.net/cms/api/am/videofiledata/RE4miKs-frfr?ver=7ef1",
                  //     url: vidcc,
                  //     locale: urlRegion,
                  //     ccType: "VTT",
                  //   },
                  // ],
                  downloadableFiles: [
                    {
                      // url: "https://microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-studio/surface-studio-2-video-1080/Studio-2-sizzle_transcript_en-us.txt",
                      url: viddl,
                      locale: urlRegion,
                      mediaType: "transcript",
                    },
                  ],
                };
              }
              UmpPlayers["player" + fsindex + vidindex] = ump(umpElements["element" + fsindex + vidindex], umpPlayerOptions["upo" + fsindex + vidindex]());  
            }, (parseInt(fsindex) + parseInt(vidindex)) * 200)
          }
        }
        function populateyt(vidindex, vidid, vidscreenshot, vidtitle, vidname, showinline) {
          if (showinline === false) {
            var regiontext = ottotext.locales[urlRegion];
            $(".ottofs" + fsindex).find("li").eq(vidindex).attr("role", "none").html('<section role="none" class="m-product-placement-item context-video f-size-large">' +
                '<a href="javascript:void(0)" class="OttoGallery" data-otto-type="lightbox" tabindex="-1" data-otto-generated="true" data-otto-lightbox-container="body" ' +
                  'data-otto-lightbox-vid-vertical-placement="2%" data-otto-youtubeid="' + vidid + '" id="vidouter' + fsindex + vidindex + '" data-otto-thevidname="' + vidname + '">' +
                  '<picture class="c-image">' +
                    '<source srcset="' + vidscreenshot + '" media="(min-width:0)">' +
                      '<img srcset="" src="' + vidscreenshot + '" alt="' + vidtitle + '">' +
                    '</picture>' +
                  '</a>' +
                  '<a href="javascript:void(0)" class="c-action-trigger c-glyph glyph-play OttoGallery" data-otto-generated="true" id="vidinner' + fsindex + vidindex + '" data-otto-type="lightbox" data-otto-lightbox-container="body" ' +
                    'data-otto-lightbox-vid-vertical-placement="2%" data-otto-youtubeid="' + vidid + '" aria-label="' + regiontext["keyAriawatch"] + ' ' + vidname + '" role="tab" data-otto-thevidname="' + vidname + '">' +
                    '<span class="x-screen-reader">' + regiontext["keyPlay"] + '</span>' +
                  '</a>' +
                '</section>')
            if ($(".OttoFilmstrip").last().index(".OttoFilmstrip") === fsindex && $(".ottofs" + fsindex + " ul").find("section").length === numberofitems) {
              OttoLightboxes();
            }
          } else {
            var regiontext = ottotext.locales[urlRegion];
            var inlineclass = "";
            if (vidindex === 0) {inlineclass = "inlinefsActive"}
            $(".ottofs" + fsindex).find("li").eq(vidindex).attr("role", "none").html('<section role="none" class="m-product-placement-item context-video f-size-large" data-linkedstrip="media' + fsindex + vidindex + '">' +
                '<a href="javascript:void(0)" class="inlinelink ' + inlineclass + '" role="tab" data-otto-generated="true" ' +
                  'aria-label="update main gallery with video: ' + vidtitle + '" id="vidouter' + fsindex + vidindex + '" data-otto-thevidname="' + vidname + '">' +
                  '<picture class="c-image">' +
                    '<source srcset="' + vidscreenshot + '" media="(min-width:0)">' +
                      '<img srcset="" src="' + vidscreenshot + '" alt="' + thumbalt + '">' +
                    '</picture>' +
                  '</a>' +
                  '<a href="javascript:void(0)" class="c-action-trigger c-glyph glyph-play" tabindex="-1" style="pointer-events:none;cursor:auto;" data-otto-generated="true" id="vidinner' + fsindex + vidindex + '" ' +
                    'aria-hidden="true" aria-label="" role="tab" data-otto-thevidname="' + vidname + '">' +
                    '<span class="x-screen-reader">' + regiontext["keyPlay"] + '</span>' +
                  '</a>' +
                '</section>')
            $(".ottoinline" + fsindex + " .c-sequence-indicator button").eq(vidindex).replaceWith('<button role="tab" aria-selected="true" aria-controls="media' + fsindex + vidindex + '"></button>' +
                                                                          '<span id="" class="c-tooltip" role="tooltip" aria-hidden=""></span>')
            $(".ottoinline" + fsindex + " ul li").eq(vidindex).replaceWith('<li id="media' + fsindex + vidindex + '" class="carLi">' +
                                                '<section class="m-hero-item f-x-center f-y-bottom context-device theme-light">' +
                                                '<div class="m-ambient-video"><iframe class="ytplayer" role="application" id="ytvid_' + fsindex + vidindex + '" ' + 
                                           'data-ytid="' + vidid +'"></iframe></div></section></li>')
            if ($(".ottofs" + fsindex + " ul").find("section").length === numberofitems) {
              connectMedia();
            }

          }
        }
        function populatemp4(vidindex, vidurl, vidscreenshot, vidtitle, vidname, showinline) {
          if (showinline === false) {
            var regiontext = ottotext.locales[urlRegion];
            $(".ottofs" + fsindex).find("li").eq(vidindex).attr("role", "none").html('<section role="none" class="m-product-placement-item context-video f-size-large">' +
                '<a href="javascript:void(0)" class="OttoGallery" data-otto-type="lightbox" tabindex="-1" data-otto-generated="true" data-otto-lightbox-container="body" ' +
                  'data-otto-lightbox-vid-vertical-placement="2%" data-otto-video-mp4="' + vidurl + '" data-otto-htmlfivevideoname="htmlvid'+ fsindex + vidindex + '" data-otto-thevidname="' + vidname + '">' +
                  '<picture class="c-image">' +
                    '<source srcset="' + vidscreenshot + '" media="(min-width:0)">' +
                      '<img srcset="" src="' + vidscreenshot + '" alt="' + vidtitle + '">' +
                    '</picture>' +
                  '</a>' +
                  '<a href="javascript:void(0)" class="c-action-trigger c-glyph glyph-play OttoGallery" data-otto-generated="true" data-otto-type="lightbox" data-otto-lightbox-container="body" ' +
                    'data-otto-lightbox-vid-vertical-placement="2%" data-otto-video-mp4="' + vidurl + '" data-otto-htmlfivevideoname="htmlvid'+ fsindex + vidindex + '" aria-label="' + 
                    regiontext["keyAriawatch"] + ' ' + vidname + '" role="tab" data-otto-thevidname="' + vidname + '">' +
                    '<span class="x-screen-reader">' + regiontext["keyPlay"] + '</span>' +
                  '</a>' +
                '</section>')
            if ($(".OttoFilmstrip").last().index(".OttoFilmstrip") === fsindex && $(".ottofs" + fsindex + " ul").find("section").length === numberofitems) {
              OttoLightboxes();
            }
          } else {
            var regiontext = ottotext.locales[urlRegion];
            var inlineclass = "";
            if (vidindex === 0) {inlineclass = "inlinefsActive"}
            $(".ottofs" + fsindex).find("li").eq(vidindex).attr("role", "none").html('<section role="none" class="m-product-placement-item context-video f-size-large" data-linkedstrip="media' + fsindex + vidindex + '">' +
                '<a href="javascript:void(0)" class="inlinelink ' + inlineclass + '" data-otto-type="" role="tab" data-otto-generated="true" ' +
                  'aria-label="update main gallery with video: ' + vidtitle + '" data-otto-htmlfivevideoname="htmlvid'+ fsindex + vidindex + '" data-otto-thevidname="' + vidname + '">' +
                  '<picture class="c-image">' +
                    '<source srcset="' + vidscreenshot + '" media="(min-width:0)">' +
                      '<img srcset="" src="' + vidscreenshot + '" alt="' + thumbalt + '">' +
                    '</picture>' +
                  '</a>' +
                  '<a href="javascript:void(0)" class="c-action-trigger c-glyph glyph-play" tabindex="-1" style="pointer-events:none;cursor:auto;" data-otto-generated="true" ' +
                    'data-otto-htmlfivevideoname="htmlvid'+ fsindex + vidindex + '" aria-hidden="true" aria-label=""' + 
                    '" role="tab" data-otto-thevidname="' + vidname + '">' +
                    '<span class="x-screen-reader">' + regiontext["keyPlay"] + '</span>' +
                  '</a>' +
                '</section>')
            $(".ottoinline" + fsindex + " .c-sequence-indicator button").eq(vidindex).replaceWith('<button role="tab" aria-selected="true" aria-controls="media' + fsindex + vidindex + '"></button>' +
                                                                          '<span id="" class="c-tooltip" role="tooltip" aria-hidden=""></span>')
            $(".ottoinline" + fsindex + " ul li").eq(vidindex).replaceWith('<li id="media' + fsindex + vidindex + '" class="carLi">' +
                                                // '<section class="m-hero-item f-x-center f-y-bottom context-device theme-light">' +
                                                // '<div class="m-ambient-video"><iframe src="' + vidurl + '"></iframe></div></div></section></li>')
                                                '<section class="m-hero-item f-x-center f-y-bottom context-device theme-light">' +
                                                // '<div class="m-ambient-video">' +
                                                //     '<video controls role="img" alt="video: ' + vidtitle + '" poster="">' +
                                                //         '<source src="' + vidurl + '" type="video/mp4">' +   
                                                // '</video></div></section></li>')
                                                '<div class="m-ambient-video"><iframe class="damVideo" aria-label="main gallery now displaying ' + vidtitle + '" src="' + vidurl + '" allowfullscreen></iframe></div></section></li>')
            if ($(".ottofs" + fsindex + " ul").find("section").length === numberofitems) {
              connectMedia();
            }
          }
        }
        function populateimg(imgindex, image, imgtitle, showinline) {
          if (showinline === false) {
            var regiontext = ottotext.locales[urlRegion];
            $(".ottofs" + fsindex).find("li").eq(imgindex).attr("role", "none").html('<section role="none" class="m-product-placement-item context-video f-size-large">' +
                            '<a href="javascript:void(0)" data-js-dialog-show="image-' + fsindex + imgindex + '" aria-label="' + regiontext["keyClickenlarge"].replace("<PLACEHOLDER>", imgtitle) + 
                            '" role="tab">' +
                            '<picture class="c-image">' +
                                '<source srcset="' + image + '" media="(min-width:0)">' +
                                '<img srcset="" src="' + image + '" alt="' + imgtitle + '">' +
                            '</picture>' +
                                '<span class="x-screen-reader">' + regiontext["keySeeimage"] + '</span>' +
                            '</a>' +
                        '</section>');
            $(".ottofs" + fsindex).after('<div class="c-dialog f-lightbox" id="image-' + fsindex + imgindex + '" aria-hidden="true">' +
                                  '<div role="presentation" tabindex="-1"></div>' +
                                  '<button class="c-glyph glyph-cancel" data-js-dialog-hide aria-label="' + regiontext["keyClosedialog"] + '" tabindex="0"></button>' +
                                  '<div role="dialog" tabindex="-1">' +
                                      '<div role="document">' +
                                          '<img alt="' + imgtitle + '" src="' + image + '">' +
                                      '</div></div></div>')
            if ($(".OttoFilmstrip").last().index(".OttoFilmstrip") === fsindex && $(".ottofs" + fsindex + " ul").find("section").length === numberofitems) {
              OttoLightboxes();
            }
          } else {
            var regiontext = ottotext.locales[urlRegion];
            var inlineclass = "";
            if (imgindex === 0) {inlineclass = "inlinefsActive"}
            $(".ottofs" + fsindex).find("li").eq(imgindex).attr("role", "none").html('<section role="none" class="m-product-placement-item context-video f-size-large" data-linkedstrip="media' + fsindex + imgindex + '">' +
                            // '<a href="javascript:void(0)" class="inlinelink ' + inlineclass + '" aria-label="' + regiontext["keyClickenlarge"].replace("<PLACEHOLDER>", imgtitle) + 
                            '<a href="javascript:void(0)" class="inlinelink ' + inlineclass + '" role="tab" aria-label="update main gallery with image: ' + imgtitle + '">' +
                            '<picture class="c-image">' +
                                '<source srcset="' + image + '" media="(min-width:0)">' +
                                '<img srcset="" src="' + image + '" alt="' + imgtitle + '">' +
                            '</picture>' +
                                // '<span class="x-screen-reader">' + regiontext["keySeeimage"] + '</span>' +
                            '</a>' +
                        '</section>');
            $(".ottoinline" + fsindex + " .c-sequence-indicator button").eq(imgindex).replaceWith('<button role="tab" aria-selected="true" aria-controls="media' + fsindex + imgindex + '"></button>' +
                                                                          '<span id="" class="c-tooltip" role="tooltip" aria-hidden=""></span>')
            $(".ottoinline" + fsindex + " ul li").eq(imgindex).replaceWith('<li id="media' + fsindex + imgindex + '" class="carLi">' +
                                                '<section class="m-hero-item f-x-left f-y-top context-accessory theme-dark" role="tabpanel">' +
                                                  '<picture>' +
                                                    '<source srcset="' + image + '" media="(min-width:0)">' +
                                                    '<img srcset="' + image + '" src="' + image + '" alt="' + imgtitle + '" aria-label="main gallery now displaying ' + imgtitle + '">' +
                                                  '</picture></section></li>')
            if ($(".ottofs" + fsindex + " ul").find("section").length === numberofitems) {
              connectMedia();
            }
          }
        }

        // connect filmstrip and hero behaviors
        function connectMedia() {
          mwfAutoInit.ComponentAutoInitializer.initializeAll();
          $("click", ".ottofs" + fsindex + ".inlinefilmstrip a").first().addClass("inlinefsActive");
          $(document).on("click", ".ottofs" + fsindex + ".inlinefilmstrip a", function(e) {
            $(".ottofs" + fsindex + ".inlinefilmstrip a").removeClass("inlinefsActive");
            $(".ottofs" + fsindex + " .inlinelink").attr("tabindex", "-1");
            $(this).addClass("inlinefsActive").attr("tabindex", "0");
            var linkedmedia = $(this).closest(".m-product-placement-item").attr("data-linkedstrip");
            $('button[aria-controls="' + linkedmedia + '"]')[0].click();
            var currentcar = $(".OttoIMAnnounce").attr("data-carouselcurrent");
            var closestLi = $(this).closest("li");
            var speakindex = $(".ottofs" + fsindex + ".inlinefilmstrip li").index(closestLi) + 1;
            var totalLi = $(".ottofs" + fsindex + ".inlinefilmstrip li").length;
            if (speakindex === parseInt(currentcar)) {
              if ($(".OttoIMAnnounce").text().indexOf("displaying") === -1) {
                var updPhrase = "main gallery already displaying item " + speakindex + " of " + totalLi;
              } else {
                var updPhrase = "main gallery already on item " + speakindex + " of " + totalLi;
              }
              
            } else {
              var updPhrase = "main gallery updated with item " + speakindex + " of " + totalLi;
            }
            
            // if ($(".OttoIMAnnounce").text() === updPhrase) {}
            setTimeout(function() {
              $(".OttoIMAnnounce").text(updPhrase).attr("data-carouselcurrent", speakindex);
            }, 300)
            
            // $(linkedmedia)[0].focus();
            stopAllVids();
          })
          $(document).on("keypress", ".ottofs" + fsindex + ".inlinefilmstrip a", function(event) {
            if(event.keyCode== 32){ 
              event.preventDefault();
              $(this).click();
              stopAllVids();
              // $(".gameDiv").not(".pagHide").not(".catHide").eq(0).find("a").focus();
            }
          })
          if (navigator.userAgent.indexOf("Firefox") !== -1) {
            $(document).on("keypress", ".inlinelink", function(event) {
              if(event.keyCode === 32 || event.keycode === 13){ 
                event.preventDefault();
                $(this).click();
              }
            })
          }
          $(document).on("click", ".ottoinline" + fsindex + " .f-next", function(e) {
            var largeindex = $(".ottoinline" + fsindex + " .c-sequence-indicator button[aria-selected='true'").index(".ottoinline" + fsindex + " .c-sequence-indicator button");
            $(".ottofs" + fsindex + ".inlinefilmstrip a.inlinelink ")[largeindex].focus();
            $(".ottofs" + fsindex + ".inlinefilmstrip a.inlinelink ")[largeindex].click();
            setTimeout(function() {
              stopAllVids();
              e.target.focus();
            }, 20)
          })
          $(document).on("click", ".ottoinline" + fsindex + " .f-previous", function(e) {
            var largeindex = $(".ottoinline" + fsindex + " .c-sequence-indicator button[aria-selected='true'").index(".ottoinline" + fsindex + " .c-sequence-indicator button");
            $(".ottofs" + fsindex + ".inlinefilmstrip a.inlinelink ")[largeindex].focus();
            $(".ottofs" + fsindex + ".inlinefilmstrip a.inlinelink ")[largeindex].click();
            setTimeout(function() {
              stopAllVids();
              e.target.focus();
            }, 20)
          })

          // filmstrip arrow navigation setup
          $(".ottofs" + fsindex + " .inlinelink").attr("tabindex", "-1");
          $(".ottofs" + fsindex + " .inlinelink").first().attr("tabindex", "0");
          $(".ottofs" + fsindex + " .inlinelink").on("keydown", function(e) {
            if (e.keyCode === 39) { // right arrow key
              e.preventDefault();
              var currentindex = $(this).index(".ottofs" + fsindex + " .inlinelink");
              var totalthumbs = $(".ottofs" + fsindex + " .inlinelink").length;
              if (currentindex === totalthumbs - 1) {
                $(".ottofs" + fsindex + " .inlinelink").eq(0)[0].click();
                $(".ottofs" + fsindex + " .inlinelink").eq(0)[0].focus();
              } else {
                $(".ottofs" + fsindex + " .inlinelink").eq(currentindex + 1)[0].click();
                $(".ottofs" + fsindex + " .inlinelink").eq(currentindex + 1)[0].focus();
              }
            }
            if (e.keyCode === 37) { // left arrow key
              e.preventDefault();
              var currentindex = $(this).index(".ottofs" + fsindex + " .inlinelink");
              var totalthumbs = $(".ottofs" + fsindex + " .inlinelink").length;
              if (currentindex === 0) {
                $(".ottofs" + fsindex + " .inlinelink").eq(totalthumbs - 1)[0].click();
                $(".ottofs" + fsindex + " .inlinelink").eq(totalthumbs - 1)[0].focus();
              } else {
                $(".ottofs" + fsindex + " .inlinelink").eq(currentindex - 1)[0].click();
                $(".ottofs" + fsindex + " .inlinelink").eq(currentindex - 1)[0].focus();
              }
            }
          })
          // $("body").append('<script src="https://www.youtube.com/iframe_api"></scr' + 'ipt>')
          //// load YouTube Iframe API ////
                    // var tag = document.createElement('script');
                    // tag.src = "https://www.youtube.com/iframe_api";
                    // var firstScriptTag = document.getElementsByTagName('script')[0];
                    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          //// loaded YouTube Iframe API ///  
          if ($(".ytplayer").length > 0) {
            onYouTubeIframeAPIReady();
          }      

          OttoLightboxes("inline");
        }
      });  

    })();

    function checklightboxheight() {
      $(".lightboxcontent").removeClass("ottosmallscreen");
      $(".lightboxcontainer").css("height", "100%");
      var winheight = $(window).height();
      var scrollheight = $(document).scrollTop();
      var bottomboxpos = ($(".lightboxcontainer").offset().top - scrollheight) + $(".lightboxcontainer").height();
      if (bottomboxpos >= winheight) {
        var difference = Math.ceil(bottomboxpos - winheight);
        var amounttoshrink = Math.floor(difference + (.16 * difference));
        var newlbheight = $(".lightboxcontainer").height() - amounttoshrink;
        $(".lightboxcontainer").css("height", newlbheight + "px");
        $(".lightboxcontent").addClass("ottosmallscreen");
      } else {
        $(".lightboxcontainer").css("height", "100%");
      }
    }

    var windowresized = (function () {
      var timers = {};
      return function (callback, ms, uniqueId) {
        if (!uniqueId) {
          uniqueId = "Fires only once.";
        }
        if (timers[uniqueId]) {
          clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
      };
    })();

    $(window).resize(function () {
      windowresized(function(){
        if ($(".lightboxcontainer").length !== 0) {
          checklightboxheight();
        }
      }, 400, "pageresize");
    });
  });

  function onYouTubeIframeAPIReady() {
    window.playerList = {};
    $(document).ready(function(){
      if ($("script[src='https://www.youtube.com/iframe_api']").length === 0) {
        $("body").append('<script src="https://www.youtube.com/iframe_api"></scr' + 'ipt>')
      }
      let checkCount = 0;
      var checkYtLoaded = setInterval(function () {
        checkCount++;
        if (typeof YT !== "undefined") {
          runYt();
          clearInterval(checkYtLoaded);
        }
        if (checkCount == 40) {
          console.warn("Youtube API not loading, removing youtube.");
          clearInterval(checkYtLoaded);
        }
      }, 300);
      function runYt() {
        $(".ytplayer").each(function(event) {
          var iframeid = $(this).attr("id");
          console.log(iframeid)
          //var datasource = $(this).attr("data-source");
          var ytid = $(this).attr("data-ytid");
          console.log(ytid)
          $(this).attr("src", 'https://www.youtube-nocookie.com/embed/' + ytid + 
                  '?enablejsapi=1&origin=https://' + window.location.host + '&rel=0');
          $(this).attr("frameborder", "0").attr("allowfullscreen", "true");
            
          playerList[iframeid] = new YT.Player(iframeid, {
            'videoId': ytid,
            'host': "https://www.youtube-nocookie.com",
            playerVars: { 'rel': 0, 'origin': window.location.href  }
            //'src': datasource,
            // events: {
              // 'onReady': onPlayerReady,
              // 'onStateChange': onPlayerStateChange
            // }
          });
        })
      }
    });
  }

  function stopAllVids() {
    $(".ottoinlinemedia video").each(function() { $(this)[0].pause() }) // stop all mp4's
    if (window.playerList) {
      var allplayers = Object.keys(window.playerList); // stop youtube
      for (var i = 0; i < allplayers.length; i++) {
        let theplayer = window.playerList[allplayers[i]]
        let playerstate = window.playerList[allplayers[i]].getPlayerState();
        if (playerstate === 1) {
          playerList[allplayers[i]].pauseVideo();
        }
      }
    }
    $(document).find(".damVideo").each( function() {
      if (!$(this).closest("li").hasClass("f-active")) {
        $(this).attr('src', $(this).attr('src')); // reset dam videos
      }
    });
  }
}

window.rtIdMap = {
"RW1o6FV": "4e8bed9a-8ffb-4b79-9ab2-0ffb53e658ba", "RW1lUQf": "f7fee949-6dc9-414f-b7de-6e45a6d20cfd", "RW1qo2R": "b96f09e2-2648-49f0-a21c-dcb4290c0490", "RW15QSP": "481a08d1-bbf0-4cd7-abd9-1eb25fa6d937", "RW1qdo6": "d94b2d4a-e04d-48ce-95f7-f16bae658f51", "RW1dmU7": "350c8df2-4e3e-453c-87ea-f4bd52e2edb2", "RW1l2vc": "94c003d2-c67c-42f3-a859-3020d4072012", "RW1eCbc": "11cf2975-efc7-437f-ae0b-92985546de4a", "RW1bjsz": "c6928189-1402-446f-a2cf-dedc8afd555f", "RW1lWjV": "3dbb107d-4f41-42d3-8ed9-809b1698e724", "RW1dIj2": "b5619ac1-b108-4b73-894b-0973f015b573", "RW1doPC": "8efc3734-060c-4807-892d-a0a34e1ad873", "RW1dmeU": "f4c51658-da03-4213-8612-b3dad57b04d4", "RW1dh4Q": "aaf63394-bc64-474b-ae52-b6a4c1a5efcd", "RW1mHOE": "3b91c7c5-23fc-4d54-83e4-2bbd62a2c594", "RW1m3j6": "8e594f01-71ba-4120-be8a-5474a9d0c500", "RE4GMMU": "45c31df6-35d5-40b4-9109-fea829216d54", "RE4GRNS": "0572246e-f6f4-4dd7-bb93-9658274f9f09", "RE4GMMe": "978a9e57-7369-498c-9889-e5ec8672ed18", "RE4GMMa": "5706b8e4-9c7a-4fd0-9232-9a654bd29406", "RE4GHEF": "d5a9c7ff-abb7-46d2-a5b6-8b476d7b96ad", "RE4GK67": "979a5add-9ba0-48a7-8d87-1065fef5ac3a", "RE4GK5K": "3f194a62-469d-4e64-a59c-6abfd8ae740d", "RE4GML4": "1124b320-74f7-4d2f-b07d-6481990293ae", "RE4GEK9": "60568584-025e-4ee7-98ca-ca244019ef6d", "RE4GEK2": "296bea0c-49c8-4793-a93a-7df3e33aaecd", "RE4Gzwh": "e053c0e0-6120-469d-b4d3-b523ca712712", "RE4GHA7": "4a4eda50-d526-49c5-9fd2-9f252e13a646", "RE4GHyN": "05bcb534-7ff6-4fdc-b80a-567968c8cbd3", "RE4GBYh": "999c865a-8a21-4858-b1d3-d503c0a5c001", "RE4GEHY": "ed0f40a3-10a3-4519-9693-be32e5db89ae", "RE4GK26": "1ca65765-1a0c-4344-a754-56948f1109d7", "RE4Gzjv": "07b5fee9-01de-45b6-bfc5-bd9fd40df3f7", "RE4GMpB": "8ccf6501-1c42-4567-91e3-f31fd59bb502", "RE4GBNz": "a42ddcbe-f3aa-4fc1-868a-660fe832e06d", "RE4GHe3": "24ec8497-0ace-432c-99ac-54bfc30a50ea", "RE4GJzP": "d8f9082b-d889-417e-95c7-ff309751bf61", "RE4GJym": "63aeae1b-b9ac-49d1-bbaf-1e1685556890", "RE4GBIK": "ee4e91ac-932a-459b-8289-92025dcc9859", "RW1hzMu": "7e42840d-4c72-4db5-9bc0-f77fc3c4c3ec", "RW166AD": "c9230aa9-fc89-45fd-aec7-90e69376b1cc", "RE25475": "5b5c2d1d-11ba-48e7-833a-bca539d1f63d", "RW15VVJ": "a05d950d-5455-4fbc-ace8-e0b2749a3f30", "RW1pKcH": "22fbbe64-066b-4680-a433-5862cc7e2da1", "RW1fAtQ": "6d0af9a2-1fad-4197-9675-05c9b377dfd0", "RE4NSpN": "8d21f98e-845d-47fe-9fcb-d3180adb9190", "RE59p9o": "c45b79bc-acde-4eb6-a3eb-57fa33db6cd5", "RW1qphx": "b0e9d876-82b8-4bd0-bbd6-ff6554ad0d7a", "RW1pCmD": "bee21849-8345-430a-9605-ee17bca70188", "RW1ecYa": "6fb7ecfa-b5fe-4dcc-ba81-e09c0590e43b", "RW1hxib": "37ff1cb1-cdd0-4ed1-8619-bea5816bd6e3", "RW1hxia": "379ea852-8241-4a56-8b93-61390d474e85", "RW1qplo": "c48d0ca1-2758-4bcc-8647-11a6b7534626", "RW1ealU": "c304cab7-89f6-4976-89e2-0a877f4c2aac", "RW1e53i": "2d02be25-4300-4132-a477-b91b0f8365a8", "RW1ecY9": "1a712a38-8edc-414b-8476-c41465ba8bde", "RW1lfzC": "ad281bb4-2a07-4d12-b2f3-7ade5862b0a2", "RW193WT": "76c915ea-cfc8-45a8-b8db-49a87ff62b0f", "RW193Xa": "b35cd904-d2f4-4d2f-8c14-0a01e3da862b", "RW193Xg": "ad705cc8-489e-4888-a958-a385f62ac41d", "RW1lfzD": "f9240199-03ee-42fd-b62b-4c534a8b6176", "RW1m3C3": "0502fe2d-78ba-49a8-9f85-8e067d0c281a", "RW18ZVG": "60891f0d-af14-4661-b1cc-11eec10e2976", "RW1lUQm": "2bee318c-aa4f-46d0-8123-d69958ae82aa", "RW1ewYx": "e817ad96-eb10-4ef7-a881-eb762bcc0d59", "RW1oq8b": "618251a5-cea4-413c-b5da-a8ed1c2c14f6", "RW1okVj": "1593f3ac-f4c7-4701-aa74-16f7627f0f31", "RW1o6TW": "e4f4b6ba-dd0e-4f65-8f92-52c2c9baa7d2", "RW1lI2S": "a10e9169-ca55-4afd-881c-bf79bdd19d7c", "RW1m0CR": "d82e6093-8e86-4499-b15b-5a4e0fe075b1", "RW15Ofm": "c2380fd6-9ede-411b-a150-30d7ee9b661f", "RW11AKE": "c9549c3e-c6bd-4fcb-96c1-928411ce2425", "RW16tAv": "6ddd1d6c-dc19-4f12-aa3a-43d74598f5a5", "RW16gBc": "1735dfa7-a327-4f1a-9875-36f5563a970d", "RW16tAw": "3c812e9d-7d92-4e8b-84dc-03bba67e98aa", "RW16tAx": "3e60c033-ee08-417b-954e-945895c8a3de", "RW1h6m9": "1aa2b6ca-5364-48b8-90c9-8f86059f0813", "RW1h6m7": "bdcc86ce-217a-49f9-a3b1-9e47491826ed", "RW17VoC": "e02d26e3-dcd8-4c80-a0a8-3c8de202265f", "RW180uF": "9ea0a6cd-7670-4c9d-b205-2b010cd873b0", "RW1qfVB": "bd30bf00-55d1-4e20-a651-3c1780b480f2", "RW1qfVF": "5f6d99ca-c949-4f8a-bd60-cddc4573f2c8", "RW1o6DB": "ca552c53-303f-47f7-88b4-ec1943629c9c", "RW1lPGc": "0d0b7148-219b-4f2f-b178-4267b445e068", "RW1izs7": "9803be07-6287-4588-937e-3c300117cbab", "RW1lbAr": "a8271167-817e-415e-a351-59b5595bb022", "RW1eCxK": "f207750c-efbb-47ee-847c-3ea7748cc49d", "RW1lUQs": "694a7d27-5a6b-4871-932c-743054b4f5db", "RW1lPG7": "21f4a01e-2203-44fc-befb-1eea01dfff4d", "RW1qxel": "65d3f3d0-67de-408e-acf3-f846c15cd67f", "RW15LBo": "d9c68232-90ce-4e58-b085-45d443541857", "RW1c2eM": "8dcc3e36-dc6b-49b5-9d62-bd3d90e15956", "RW1c9TA": "f653afa1-15a4-424b-a211-13933bdeeba6", "RW1p9Ad": "719f4535-ca5f-4471-83ab-fb6aad2b29de", "RW17MjM": "aa2ad1c2-ddbb-4f01-a349-552ae221ef23", "RW17JFA": "875a2742-4b94-4ff8-949a-d3de9c6afd51", "RW1f4mS": "06152273-aba2-4bc0-8781-18da35bd89ba", "RE4NSoZ": "ca5df07f-1803-45d3-8a4b-c8360def3764", "RW1hZd4": "85ec77d3-a878-4158-ba5d-a5c727946793", "RW1mGlY": "7380c539-ab7a-426e-bd32-bbc2c8c9668d", "RW15OfG": "94f0c5d1-c7ba-4287-95fc-9301a159637d", "RE4ZiBi": "306db146-4300-4229-a1f8-985b4dfeea54", "RW1lPFU": "ac565e2c-e7ed-4ef0-ac9b-0e3232327ffd", "RW1k24c": "d92ede1a-d9a8-4aa2-83a8-c06c8791e3d7", "RW15WoI": "7b45b811-0cd3-4b94-b79c-624b10b802b7", "RE4pCRF": "09b36138-1851-43d9-b608-374d3616f90f", "RW1c3qw": "6de5e0f4-ca21-45a2-af49-366143800b04", "RW1pzJG": "1ab89155-f05b-417f-8580-49bbd9c68626", "RW1jLlt": "a135a934-9667-4415-9cfe-6f583671ae57", "RW1hTVX": "35750bb3-a770-40ce-984d-cf6063869fae", "RW1jVIq": "ed01588b-a920-4504-a197-23b62f292d6e", "RW1mtin": "b723b65c-6cfa-4cfd-a584-bbb09f2e9105", "RW1m3eg": "53f0d925-4089-477c-b6f7-0e58b4ecd63f", "RW1fGvA": "0ebcb746-93dd-446f-b926-5c606b1a496c", "RW1ojcA": "0c53b80b-2b88-4441-afc8-f81d456fa975", "RW1qpl1": "b86d652d-500e-4960-9df8-94f8d608b3ff", "RW17aSm": "53d45a0b-7d3c-41f6-9b46-87057bda8832", "RW17kSB": "f11d4d81-e66e-4784-a76e-82610499370e", "RW1bGIP": "02cd3dfa-54a6-4271-9f47-b28399a59ac7", "RW1bGwy": "b97bbaf4-3bee-4ee8-8367-08e4dfeaf6d0", "RW1eFqz": "1cbcd0ff-532c-4093-8c85-e41f2be7dc04", "RW1o1z9": "1080748b-6f46-4399-ba2e-41c3064e61d5", "RW1o6Cy": "57a14cc5-5ccb-4656-93b5-a37b84a04bcd", "RWPoDJ": "ba62962b-ed8c-4862-935e-a23c4cee6bfb", "RW15Z0T": "344ff563-97bc-41f0-bf9f-0d4f5ad599fa", "RE5ghl2": "e6727644-1140-4c8b-9a4d-2749bd97953b", "RW1e7Nf": "25cf2251-4aa9-42f8-9fb5-aa39c7e747ca", "RW15U3c": "faa08a99-6cfe-4323-bc72-133bb3abadd8", "RW1njYE": "7c5629c7-20d1-4455-94ce-50827f82e8fe", "RW1nyCg": "3d4a48a8-f045-44dd-ab02-310deb2cd477", "RW1noH7": "daf4ccc5-06c9-4adb-9e5d-be60c8144bf2", "RW1pHGX": "c88441ba-e2e6-4d71-90f1-daf96516f5f0", "RW1fBux": "8f3a1d85-3d69-4336-b79c-6177b4b4c81d", "RW1c0qQ": "f377c65b-8058-4049-9d8b-89d72311451b", "RW15Ynw": "8c5951f0-6dec-4222-b1c9-3add42b52ccb", "RW15YET": "4aa25663-103e-4a75-a2cd-743f08d5f005", "RW1nyBQ": "69272bc4-76b1-4652-9a30-ea88dec33193", "RW1pAWI": "6d503475-95cf-4746-8158-7f750a68a469", "RW1pM13": "8079de25-772e-467c-bc78-fc545c584671", "RW15TZK": "f3d31730-8e15-46aa-8bdc-2b5f7718d3fc", "RW1pHGF": "25709567-ef29-4019-832b-8238909deed0", "RW166NW": "11611882-f2d0-4a3d-8b8f-343196dda69a", "RW1lWkY": "a38b8b92-2925-4cef-8312-fd932b0fc74d", "RW1lh1G": "c5cdde6c-f16f-442d-a541-41d6478c03c5", "RW1fz3F": "1e135d29-0b09-4670-8b27-5111b07d1be4", "RW1pzJv": "2109330a-0fa2-49c7-adbf-1e62215da420", "RW1joVV": "e0374982-eb32-4308-9095-ff29d6e03f4e", "RW1o1Q9": "1cf2b16b-2a4a-4e47-80a2-47e12fec95a7", "RW15JEe": "8b34e2c5-4ad7-4fd1-8916-a029bd045d5a", "RW1qcX4": "f36dc025-5fee-40e3-8e0b-759663a71fc5", "RW1a27R": "ef9e9820-7222-48bd-a3f9-ecd2f0929816", "RW17c21": "7b5ab3d4-49ac-49e3-8657-65b190c7156b", "RW17fiM": "fd2f927c-0872-4080-b069-2310e5fb89c2", "RW1a2GO": "6448697b-fae7-4e18-b2ca-e756bd6fcef9", "RW1oEYP": "d53398e0-8eb8-4c1b-a7f9-40ed66f09915", "RW1nvoR": "e4cc043d-4355-4960-b042-1d713c732b15", "RW1oF0j": "5c3a4277-d341-4ce2-b654-456387672fdd", "RW1oEZK": "ad1c1ebe-3bfb-4b0f-907d-7f12d84bacfb", "RW15Z1W": "2d8a7a1c-b9d9-49b5-bb82-281cbe0c831f", "RW1qi8D": "d4a69ba3-2766-4fa8-a282-3df303fd6a41", "RW1qi8o": "97ad1b1c-8e3b-44be-a7ab-1405373e82f3", "RW1qcWD": "dc989f86-2cea-460d-854b-32b694833a11", "RW1lXVs": "886ac93a-d218-4264-b195-df26b8d1dccb", "RW1fDZL": "0264da73-d99c-428f-a1c8-b594c944a330", "RW1gZlo": "1636ad7d-28fb-4059-af16-20898169a68b", "RW1o6CQ": "2957abcf-1c6f-4803-bb31-8e9ee92d3d43", "RW1lUQ4": "11b3b3c5-3a1c-416e-9157-cc64a24832b0", "RW1cU7G": "6689c987-2c55-4671-8537-48e2430dda1c", "RW1fAt2": "d9fec4d8-d659-4c08-b06e-07ef97b3d114", "RW1a5G7": "25c9248c-8211-4bc2-83b5-6d79366d3e4d", "RW161Bh": "e0ebf72d-b358-40e1-812a-8ee058751b5a", "RW1a0tX": "4213ed69-8f13-4bea-b4be-0b5da300ad1e", "RW1a0tW": "0aef7511-e322-4d46-b24b-62d068c39861", "RW1aGUl": "2afd539f-8855-431e-872e-20813fd5e087", "RW166A1": "b8f3c927-f8b0-4dfa-992b-bcc6e11e1e05", "RW15LPl": "4fb5233a-a084-4e5e-a873-5ef67cc69e21", "RW1aqtr": "6a0a8b51-ff6f-4062-a580-97c76e3f4754", "RW1fGBA": "31028be1-2854-48da-9165-1064547023db", "RW1iLln": "e808854c-d506-4061-a793-0af46712dfe8", "RW15Z1b": "50907523-7fd1-49ef-ac3e-6e41b9a0095c", "RW1aqtJ": "310607a8-0600-4ecd-91df-13f27eca88a1", "RW1qxeq": "2a89f99a-37e9-421e-939b-22f883aa40f4", "RW19Zat": "0b532ebb-e542-4246-a418-5a99efa76a9f", "RW1nwGF": "1cb2a1dd-35b4-499d-ab3c-2e4285631a4a", "RW15M2k": "6149bfa1-79d6-46b5-b416-4a200eea2f7c", "RW15TTA": "6d4de9b0-bc36-471b-a822-d8940e76d93b", "RW1kLV4": "c7f801aa-b4d5-42b6-b96c-e4d1bc586e73", "RW1oilz": "fe09e266-7c37-4cd8-90d4-deafb673c9cb", "RW1qnx0": "adf467a2-444f-470a-9847-a31a85d8936f", "RW1hnj4": "ef3ff696-0ca5-4fa7-8eac-206b7d58d986", "RW1hkCQ": "33e85650-1de4-4b0a-b7db-36d93230d675", "RW1hg2h": "423de15e-bad4-4429-9a76-10b4c5c29901", "RW1kchV": "8fd1f902-f36f-4e07-a53a-e38bf4d0f136", "RW1keR3": "ac368879-84c2-4d89-8f5e-9c8d0351f796", "RW1pHGE": "9181379e-e85c-4803-80c3-e85db3b57615", "RW1ho8F": "05b5dbf9-7850-4b44-b089-ae63ac85cee0", "RW1697Z": "f37b5ffd-f168-45c8-8087-1a96602e88a9", "RW1bTU6": "e9e8f004-6d0e-4eaa-accd-4898ba51e5f6", "RW161cL": "87d06e84-3013-4d1d-9a90-d3d0359599c6", "RW1akVm": "9862e2aa-d925-4590-be41-9ef370ae0125", "RW1pFWy": "b705c857-5081-4f60-bfce-0f0067bb6c5e", "RW1m5Kf": "97dce811-84da-49f6-901f-8447f1fb35b7", "RW15W6p": "206d0d9d-cd8e-4f31-9e38-7e6943ee5ada", "RW1hmws": "f7179029-de00-4d65-9c02-cd053ed1a862", "RW1hp3T": "3be59f7f-41b7-4739-85cb-1f39b9bf7d13", "RW1hp41": "29c3ba3f-7b44-4bd0-89ea-4dd34ef3f1e2", "RW1k38T": "17b94798-8e24-4169-bd6a-c4c1f87df40f", "RW1nzz4": "b5a0c7bd-6213-422f-b668-8d0a1432c89a", "RW1h6kH": "88bb031f-9981-4685-a2f1-431d6da5673b", "RW1b8JH": "e792951b-19df-4a98-a89a-a43f9a482b3c", "RW1o1OJ": "c789c972-4ce7-46f6-8176-7a881126aff5", "RW161cM": "d0fcbfe6-eb39-4c32-8775-75ac10ab26e8", "RW1gRmD": "34285c52-d372-4e7c-b531-6968623c5b00", "RW1lUQ3": "3afd8eff-6338-468b-a1d1-110becc82f53", "RW1pKdH": "966b59f9-cab0-4940-9252-57d919eafa24", "RW1qhuQ": "98f50ae6-cdbd-44b2-82e1-cdd46aa9bd62", "RW1neDk": "6818609a-a2f3-49c8-9db2-e9b396c233d9", "RW1qk6s": "e50cefc3-304e-4986-901a-9c2ea3f5cfc5", "RW1qhw2": "a6493265-6da9-4e27-8349-0900da963494", "RW1pKcz": "18678f55-6199-4d24-9af5-09d689c51313", "RW11RJM": "3fd925c6-1543-4e28-a4e9-05e775461b0e", "RW1lXVz": "7ebc3c1f-7ee2-4d9a-a277-0d7c2dba9bd3", "RW1kGHO": "3dcebedc-be2d-413c-97c9-669b43c76d22", "RW1gVPL": "7c38e68f-fad8-41cc-b553-d7be09ee5795", "RW1jXBY": "61a0b1a2-3731-4a32-88e4-ff0d330b7770", "RW1gZnq": "2e5a48a8-6174-4a0e-b0ab-f42f4571f9b6", "RW1npSN": "5e9e29b9-d8dc-416b-a83a-296666c83cc9", "RW1nzS3": "3b2cc6b0-20e2-42a8-82cc-9f6cd502c6b1", "RW1okCr": "b884bf1a-d06e-4536-85df-e9ad32118980", "RE2tZmO": "f9919083-4141-4914-96d5-b1bcbc966dd9", "RW1pCmI": "4549d468-f6e1-4fc1-a021-f57f3a678aa1", "RW1bT3m": "3d46fb24-8d1c-45fc-94cc-80f2f867b8a0", "RW1fIwk": "b724fadb-9d31-4366-b52a-ed0fb3e54fb6", "RWXmN1": "c10d6b3a-1bad-4dc8-839a-53af18b48f27", "RW1o6SM": "f54d4bf7-af72-4176-99b4-727827a51e3b", "RE4ZuLa": "4cbe5f0b-b317-49c7-8a6b-7e1bd1ff9604", "RW16lLW": "0198bb64-7e17-4f83-923c-0f2f7f5e1d6f", "RW15TqJ": "42014c7f-01b1-42fa-be80-9740ceaef5d2", "RW1drYN": "495f2a14-cfc0-47af-bc28-b0699076fb6d", "RW1eSna": "012b7f15-2145-422a-bedd-2f831c8b6091", "RW1qzPo": "6c5200f3-a70d-4811-b605-547bc10f2d16", "RW1qxgj": "0e5c779d-3dc7-40c4-b24c-a7726bbb67f0", "RE4J0QG": "104872e5-d24a-43b6-bc09-b9c5fc36ec59"
}

$(document).ready(function() {
  loadVidData();
})

function checkVideos() {
    let hasTriggeredUmpOtto = false;
    function runUmpOttoOnce() {
      if (hasTriggeredUmpOtto) {
        return;
      }
      hasTriggeredUmpOtto = true;
      umpOtto();
    }

    if ($("[data-otto-video]").length === 0 && $("[data-otto-iframe-src]").length === 0) {
      runUmpOttoOnce();
    } else {
      // convert to AEM GUID
      $("[data-otto-video]").each(function() {
        if ($(this).attr("data-otto-video").length === 6 || $(this).attr("data-otto-video").length === 7) {
          if (rtIdMap[$(this).attr("data-otto-video")] && rtIdMap[$(this).attr("data-otto-video")].length === 36) {
            $(this).attr("data-otto-video", rtIdMap[$(this).attr("data-otto-video")]);  
          } else {
            console.warn("Removing " + $(this).attr("data-otto-video") + ". Not found in RT->AEM map.")
            $(this).remove();
          }      
        }
      })

      const vidnum = $("[data-otto-video]").length; 
      $("[data-otto-video]").each(function(index) {
        if ($(this).attr("data-otto-video").length === 36) {
          let last = false;
          if ($("[data-otto-iframe-src]").length === 0 && index === vidnum - 1) {
            last = true;
          }
          getAemData($(this).attr("data-otto-video"), $(this), last)
        } else {
          $(this).remove();
        }
      })
      const iframenum = $("[data-otto-iframe-src]").length;
      $("[data-otto-iframe-src]").each(function(index) {
        // get AEM GUID from rtIdMap object, add with new data attribute
        let rtId = "";
        let last = false;
        if (index === iframenum - 1) {
          last = true;
        }
        if ($(this).attr("data-otto-iframe-src").length === 36) {
          rtId = $(this).attr("data-otto-iframe-src");
        } else if ($(this).attr("data-otto-iframe-src").toLowerCase().indexOf("videoplayer/embed?") !== -1) {
          const urlParams = new URLSearchParams($(this).attr("data-otto-iframe-src"));
          rtId = urlParams.get("powerCmsVideoId");
        } else if ($(this).attr("data-otto-iframe-src").toLowerCase().indexOf("videoplayer/embed") !== -1) {
          const thisiframesrc = $(this).attr("data-otto-iframe-src");
          rtId = thisiframesrc.split("/")[6].split("?")[0];
        } else {
          $(this).remove();
        }
        
        if (rtId.length === 36) {
          $(this).attr("data-aem-id", $(this).attr("data-otto-iframe-src"));
          getAemData($(this).attr("data-otto-iframe-src"), $(this), last);
        } else if (rtId.length > 0 && rtIdMap[rtId] && rtIdMap[rtId].length === 36) {
          $(this).attr("data-aem-id", rtIdMap[rtId]);
          getAemData(rtIdMap[rtId], $(this), last);
        } else {
          console.warn("Removing " + rtId + ". Not found in RT->AEM map.")
          $(this).remove();
          if (last === true && ($("[data-otto-video]").length !== 0 || $("[data-otto-iframe-src]").length !== 0)) {
            // var activecheck1 = setInterval(function() {
            //   var activeAjax = $.active;
            //   if (activeAjax === 0) {
                runUmpOttoOnce();
            //     clearInterval(activecheck1);
            //   }
            // }, 500);
          }
        }
      })
      if ($(".OttoFilmstrip").length > 0 && $(".OttoFilmstrip *").length === 0) {
        $(".OttoFilmstrip").closest("div[data-grid='container']").remove();
        runUmpOttoOnce();
      } else if ($("[data-otto-video]").length === 0 && $("[data-otto-iframe-src]").length === 0) {
        runUmpOttoOnce();
      }

      function getAemData(aemGuid, container, last) {
            const videoGuid = videoData[aemGuid];

            if (!videoGuid) {
              if (!container.attr("data-otto-youtubeid") && !container.attr("data-otto-youtubevideo")) {
                console.warn("Removing " + aemGuid + ". Data not found in video JSON.");
                container.remove();
              } else {
                console.warn("Removing " + aemGuid + ". Leaving Youtube video.");
                container.removeAttr("data-otto-video");
              }
            } else if ($(container)[0].hasAttribute("data-otto-iframe-src")) {
              $(container).attr("data-otto-iframe-src", videoGuid.videoDashUrl);
            }
              
            if (last === true) {
              runUmpOttoOnce();
            }
      }
      // end convert to AEM GUID
    }
  }
