// public/js/main.js

let authToken = null;

document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.getElementById('main-content');

  // References to aside divs
  const asideBio = document.getElementById('aside-bio');
  const asidePaintings = document.getElementById('aside-paintings');
  const asideExhibitions = document.getElementById('aside-exhibitions');
  const asideLinks = document.getElementById('aside-links');
  const asideAdmin = document.getElementById('aside-admin');

  // Map: menu -> aside div
  const asideMapping = {
    bio: asideBio,
    paintings: asidePaintings,
    exhibitions: asideExhibitions,
    links: asideLinks,
    admin: asideAdmin
  };

  // Κεντρικό μενού (nav)
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const menu = link.getAttribute('data-menu');
      handleMenuSelection(menu);
    });
  });

  function handleMenuSelection(menu) {
    // Απόκρυψη όλων των aside
    [asideBio, asidePaintings, asideExhibitions, asideLinks, asideAdmin]
      .forEach(div => div.classList.add('hidden'));

    // Εμφάνιση του τρέχοντος aside (αν υπάρχει)
    if (asideMapping[menu]) {
      asideMapping[menu].classList.remove('hidden');
    }

    // Καθαρισμός main
    mainContent.innerHTML = '';

    switch (menu) {
      case 'bio':
        mainContent.innerHTML = `<h2>Βιογραφία</h2>
          <p>Επιλέξτε ενότητα από το αριστερό μενού.</p>`;
        break;
      case 'paintings':
        mainContent.innerHTML = `<h2>Πίνακες</h2>
          <p>Επιλέξτε κατηγορία από το αριστερό μενού.</p>`;
        break;
      case 'exhibitions':
        mainContent.innerHTML = `<h2>Εκθέσεις</h2>
          <p>Επιλέξτε κατηγορία από το αριστερό μενού.</p>`;
        break;
      case 'links':
        mainContent.innerHTML = `<h2>Σύνδεσμοι</h2>
          <p>Επιλέξτε κατηγορία από το αριστερό μενού.</p>`;
        break;
      case 'admin':
        mainContent.innerHTML = `<h2>Διαχείριση</h2>
          <p>Επιλέξτε ενότητα από το αριστερό μενού.</p>`;
        break;
      default:
        break;
    }
  }

  // Πλευρικό υπομενού
  const asideLinksAll = document.querySelectorAll('aside div ul li a');
  asideLinksAll.forEach(subLink => {
    subLink.addEventListener('click', e => {
      e.preventDefault();
      const submenu = subLink.getAttribute('data-submenu');
      handleSubMenuSelection(submenu);
    });
  });

  function handleSubMenuSelection(submenu) {
    mainContent.innerHTML = '';

    switch (submenu) {
      // ------------------ ΒΙΟΓΡΑΦΙΑ ------------------
      case 'early-life':
        mainContent.innerHTML = `
          <h2>Πρώιμα Χρόνια</h2>
          <img 
            src="images/BASQUIAT.jpg" 
            alt="Jean-Michel Basquiat" 
            style="max-width: 300px; float: right; margin: 0 0 1rem 1rem;"
          />
          <p>
            Γεννήθηκε στο Μπρούκλιν της Νέας Υόρκης το 1960. Ο Basquiat ήταν ένα πρόωρο παιδί που έμαθε 
            να διαβάζει και να γράφει στην ηλικία των τεσσάρων ετών. Η μητέρα του ενθάρρυνε το 
            καλλιτεχνικό ταλέντο του γιου της και συχνά προσπαθούσε να σχεδιάσει τα αγαπημένα του κινούμενα 
            σχέδια. Το 1967, άρχισε να φοιτά στο Saint Ann's School, ένα ιδιωτικό σχολείο. Εκεί γνώρισε τον 
            φίλο του Marc Prozzo και μαζί δημιούργησαν ένα παιδικό βιβλίο, που έγραψε ο Basquiat σε ηλικία 
            επτά ετών και εικονογραφήθηκε από τον Prozzo.
          </p>

          <br><br>

          <p>
            Το 1968, σε ηλικία επτά ετών, ο Basquiat χτυπήθηκε από ένα αυτοκίνητο ενώ έπαιζε στο δρόμο. Το 
            χέρι του έσπασε και υπέστη αρκετές εσωτερικές κακώσεις, οι οποίες απαιτούσαν σπληνεκτομή. Ενώ 
            νοσηλευόταν στο νοσοκομείο, η μητέρα του του έφερε ένα αντίγραφο του Gray's Anatomy για να τον 
            κρατήσει απασχολημένο. Αφού οι γονείς του χώρισαν εκείνη τη χρονιά, ο Basquiat και οι αδερφές 
            του ανατράφηκαν από τον πατέρα τους. Η μητέρα του εισήχθη σε ψυχιατρείο όταν εκείνος ήταν δέκα 
            ετών και στη συνέχεια πέρασε τη ζωή της μέσα και έξω από ιδρύματα. O Basquiat έφυγε από το σπίτι 
            στα 15 όταν ο πατέρας του τον έπιασε να καπνίζει κάνναβη στο δωμάτιό του. Κοιμήθηκε σε παγκάκια 
            πάρκων στο Washington Square Park και πήρε LSD. Τελικά, ο πατέρας του τον εντόπισε με ξυρισμένο 
            κεφάλι και κάλεσε την αστυνομία να τον φέρει στο σπίτι.
          </p>

          <br><br>

          <p>
            Στη 10η τάξη, γράφτηκε στο City-As-School, ένα εναλλακτικό λύκειο στο Μανχάταν, όπου ζουν 
            πολλοί μαθητές καλλιτεχνών που δυσκολεύονταν τη συμβατική εκπαίδευση. Έφευγε το σχολείο με τους 
            φίλους του, αλλά παρόλα αυτά έλαβε ενθάρρυνση από τους δασκάλους του και άρχισε να γράφει και 
            να εικονογραφεί για τη σχολική εφημερίδα. Ανέπτυξε τον χαρακτήρα SAMO για να υποστηρίξει μια 
            ψεύτικη θρησκεία. Το ρητό "SAMO" είχε ξεκινήσει ως ιδιωτικό αστείο μεταξύ του Basquiat και του 
            συμμαθητή του Al Diaz, ως συντομογραφία της φράσης "Same old shit".
          </p>

          <br><br>

          <p>
            Τον Μάιο του 1978, ο Basquiat και η Diaz άρχισαν να ζωγραφίζουν γκράφιτι με σπρέι σε κτίρια στο 
            Κάτω Μανχάταν. Δουλεύοντας με το ψευδώνυμο SAMO, έγραφαν ποιητικά και σατιρικά διαφημιστικά 
            συνθήματα όπως «SAMO© AS ANALTERNATIVE TO GOD». Τον Ιούνιο του 1978, ο Basquiat αποβλήθηκε 
            από το City-As-School για την πίτα του διευθυντή. Στα 17 του, ο πατέρας του τον έδιωξε από το 
            σπίτι όταν αποφάσισε να εγκαταλείψει το σχολείο. Εργάστηκε για την Unique Clothing Warehouse 
            στο NoHo ενώ συνέχιζε να δημιουργεί γκράφιτι τη νύχτα. Στις 11 Δεκεμβρίου 1978, η The Village 
            Voice δημοσίευσε ένα άρθρο για το γκράφιτι SAMO.
          </p>

          <br>

          <p>
            Όταν ο Basquiat και ο Diaz είχαν τσακωθεί, έγραψε το "SAMO IS DEAD" στους τοίχους των κτιρίων 
            του SoHo το 1980. Τον Ιούνιο του 1980, εμφανίστηκε στο περιοδικό High Times, την πρώτη του 
            εθνική δημοσίευση, ως μέρος ενός άρθρου με τίτλο «Graffiti '80: The State of the Outlaw Art» 
            του Glenn O'Brien. Αργότερα την ίδια χρονιά, άρχισε να γυρίζει την ανεξάρτητη ταινία του O'Brien 
            Downtown 81 (2000), με αρχικό τίτλο New York Beat, η οποία περιείχε μερικές από τις ηχογραφήσεις 
            του Γκρέι στο soundtrack της.
          </p>
        `;
        break;

      case 'later-life':
        mainContent.innerHTML = `
          <h2>Ώριμη Περίοδος</h2>
          <img 
            src="images/BASQUIAT1.png" 
            alt="Jean-Michel Basquiat Later Life" 
            style="max-width: 300px; float: right; margin: 0 0 1rem 1rem;"
          />
          <p>
            Κατά τη δεκαετία του 1980, ο Jean-Michel Basquiat εδραίωσε τη φήμη του 
            ως ένας από τους σημαντικότερους σύγχρονους καλλιτέχνες της εποχής. Οι 
            έντονες γραμμές, τα σύμβολα και οι λέξεις που χρησιμοποιούσε, ανέδειξαν 
            μια νέα μορφή εικαστικής έκφρασης και τον κατέστησαν ηγετική φυσιογνωμία 
            του νεο-εξπρεσιονισμού.
          </p>
          <p>
            Συνεργάστηκε στενά με τον Andy Warhol, με τον οποίο διατήρησε μια 
            σχέση αλληλοεκτίμησης, αν και συχνά αμφιλεγόμενη. Το ενδιαφέρον του 
            Basquiat για την αφροαμερικανική ιστορία και κουλτούρα, καθώς και τα 
            βιώματα του στους δρόμους της Νέας Υόρκης, τροφοδότησαν τη θεματολογία 
            των έργων του, η οποία συχνά περιλάμβανε συμβολικές αναφορές στη φτώχεια, 
            τον ρατσισμό και την ταυτότητα.
          </p>
          <p>
            Οι πίνακές του εκτέθηκαν σε μεγάλες γκαλερί και μουσεία των ΗΠΑ και 
            της Ευρώπης, ενώ οι κριτικοί τέχνης τον αποκαλούσαν παιδί-θαύμα 
            της street art που μεταπήδησε στον κόσμο της υψηλής τέχνης. Παρά την 
            τεράστια επιτυχία του, ο Basquiat αντιμετώπισε δυσκολίες, ειδικά σε 
            θέματα ψυχικής υγείας και εξάρτησης από ουσίες.
          </p>
          <p>
            Δυστυχώς, η τροχιά του τερματίστηκε πρόωρα όταν απεβίωσε στις 12 Αυγούστου 
            1988, σε ηλικία μόλις 27 ετών, από υπερβολική δόση ηρωίνης. Παρόλα αυτά, 
            η κληρονομιά του παραμένει έντονη: έργα του πωλούνται σε υπέρογκα ποσά, 
            ενώ θεωρείται ένας από τους καλλιτέχνες που καθόρισαν την εικαστική 
            σκηνή της δεκαετίας του '80.
          </p>
        `;
        break;

      // ------------------ ΠΙΝΑΚΕΣ ------------------
      case 'street-art':
        // Εικόνες: BAS.png, BAS1.png, BAS2.png
        mainContent.innerHTML = `
          <h2>Street Art</h2>
          <div class="paintings-container">
            <div class="painting-card">
              <img src="images/BAS.png" alt="Street Art 1" />
              <p>Street Art #1</p>
            </div>
            <div class="painting-card">
              <img src="images/BAS1.png" alt="Street Art 2" />
              <p>Street Art #2</p>
            </div>
            <div class="painting-card">
              <img src="images/BAS2.png" alt="Street Art 3" />
              <p>Street Art #3</p>
            </div>
          </div>
        `;
        break;

      case 'neoexpressionism':
        // Εικόνες: BASN2.png, BASN3.png, BASN4.png, BASN5.png
        mainContent.innerHTML = `
          <h2>Neo-Expressionism</h2>
          <div class="paintings-container">
            <div class="painting-card">
              <img src="images/BASN2.png" alt="Neo-Exp 1" />
              <p>Neo Exp #1</p>
            </div>
            <div class="painting-card">
              <img src="images/BASN3.png" alt="Neo-Exp 2" />
              <p>Neo Exp #2</p>
            </div>
            <div class="painting-card">
              <img src="images/BASN4.png" alt="Neo-Exp 3" />
              <p>Neo Exp #3</p>
            </div>
            <div class="painting-card">
              <img src="images/BASN5.png" alt="Neo-Exp 4" />
              <p>Neo Exp #4</p>
            </div>
          </div>
        `;
        break;

      // ------------------ ΕΚΘΕΣΕΙΣ ------------------
      case 'exhib-upcoming':
      case 'exhib-past':
        fetch('/api/exhibitions')
          .then(res => res.json())
          .then(data => {
            mainContent.innerHTML = `<h2>Εκθέσεις (${submenu === 'exhib-upcoming' ? 'Επερχόμενες' : 'Προηγούμενες'})</h2>`;
            let html = '<table border="1"><tr><th>Τίτλος</th><th>Τοποθεσία</th><th>Από</th><th>Έως</th></tr>';
            const now = new Date();

            data.forEach(ex => {
              const start = new Date(ex.dateStart);
              const end = new Date(ex.dateEnd);
              const isUpcoming = end >= now;

              if (submenu === 'exhib-upcoming' && isUpcoming) {
                html += `<tr>
                  <td>${ex.title}</td>
                  <td>${ex.location}</td>
                  <td>${ex.dateStart}</td>
                  <td>${ex.dateEnd}</td>
                </tr>`;
              } else if (submenu === 'exhib-past' && !isUpcoming) {
                html += `<tr>
                  <td>${ex.title}</td>
                  <td>${ex.location}</td>
                  <td>${ex.dateStart}</td>
                  <td>${ex.dateEnd}</td>
                </tr>`;
              }
            });

            html += '</table>';
            mainContent.innerHTML += html;
          })
          .catch(err => {
            console.error(err);
            mainContent.innerHTML = '<p>Σφάλμα φόρτωσης εκθέσεων.</p>';
          });
        break;

      // ------------------ ΣΥΝΔΕΣΜΟΙ ------------------
      case 'web':
      case 'book':
        fetch('/api/links')
          .then(res => res.json())
          .then(links => {
            const filtered = links.filter(l => l.category === submenu);
            let html = `<h2>${submenu === 'web' ? 'Διαδικτυακοί Σύνδεσμοι' : 'Βιβλιογραφία'}</h2>`;
            html += '<table border="1"><tr><th>Τίτλος</th><th>URL / ISBN</th></tr>';
            filtered.forEach(f => {
              let linkContent = (submenu === 'web')
                ? `<a href="${f.url}" target="_blank">${f.url}</a>`
                : f.url; // (ISBN)
              html += `<tr>
                <td>${f.title}</td>
                <td>${linkContent}</td>
              </tr>`;
            });
            html += '</table>';
            mainContent.innerHTML = html;
          })
          .catch(err => {
            console.error(err);
            mainContent.innerHTML = '<p>Σφάλμα φόρτωσης συνδέσμων.</p>';
          });
        break;

      // ------------------ ΔΙΑΧΕΙΡΙΣΗ (LOGIN/LOGOUT, MANAGE EXHIB, MANAGE LINKS) ------------------
      case 'login':
        mainContent.innerHTML = `
          <h2>Σύνδεση Διαχειριστή</h2>
          <form id="login-form">
            <label for="username">Χρήστης:</label><br/>
            <input type="text" id="username" /><br/>
            <label for="password">Κωδικός:</label><br/>
            <input type="password" id="password" /><br/><br/>
            <button type="submit">Login</button>
          </form>
        `;
        {
          const loginForm = document.getElementById('login-form');
          loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('/api/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password })
            })
              .then(res => {
                if (!res.ok) throw new Error('Invalid login');
                return res.json();
              })
              .then(data => {
                authToken = data.token;
                alert('Επιτυχής Σύνδεση!');
                // Εμφανίζουμε τα admin links
                document.getElementById('logout-link').classList.remove('hidden');
                document.getElementById('manage-exhibitions-link').classList.remove('hidden');
                document.getElementById('manage-links-link').classList.remove('hidden');
                // Κρύβουμε το link Login
                document.getElementById('login-link').classList.add('hidden');
              })
              .catch(err => {
                alert('Ανεπιτυχής σύνδεση');
              });
          });
        }
        break;

      case 'logout':
        authToken = null;
        alert('Αποσυνδεθήκατε');
        // Κρύβουμε τα admin links
        document.getElementById('logout-link').classList.add('hidden');
        document.getElementById('manage-exhibitions-link').classList.add('hidden');
        document.getElementById('manage-links-link').classList.add('hidden');
        // Εμφανίζουμε πάλι το login
        document.getElementById('login-link').classList.remove('hidden');

        mainContent.innerHTML = `<p>Αποσυνδεθήκατε επιτυχώς.</p>`;
        break;

      // ---------- ΔΙΑΧΕΙΡΙΣΗ ΕΚΘΕΣΕΩΝ (CRUD) ----------
      case 'manage-exhibitions':
        if (!authToken) {
          mainContent.innerHTML = `<p>Δεν έχετε συνδεθεί ως διαχειριστής.</p>`;
          return;
        }

        mainContent.innerHTML = `
          <h2>Διαχείριση Εκθέσεων</h2>
          <form id="add-exhibition-form">
            <label>Τίτλος:</label><br/>
            <input type="text" id="exTitle" required /><br/>
            <label>Τοποθεσία:</label><br/>
            <input type="text" id="exLocation" /><br/>
            <label>Ημ/νία Έναρξης (YYYY-MM-DD):</label><br/>
            <input type="date" id="exDateStart" /><br/>
            <label>Ημ/νία Λήξης (YYYY-MM-DD):</label><br/>
            <input type="date" id="exDateEnd" /><br/>
            <button type="submit">Προσθήκη</button>
          </form>

          <hr/>
          <h3>Λίστα Εκθέσεων</h3>
          <div id="exhibitions-list"></div>
        `;

        const addExForm = document.getElementById('add-exhibition-form');
        addExForm.addEventListener('submit', e => {
          e.preventDefault();
          const newEx = {
            title: document.getElementById('exTitle').value,
            location: document.getElementById('exLocation').value,
            dateStart: document.getElementById('exDateStart').value,
            dateEnd: document.getElementById('exDateEnd').value
          };
          fetch('/api/exhibitions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify(newEx)
          })
            .then(res => {
              if (!res.ok) throw new Error('Error creating exhibition');
              return res.json();
            })
            .then(created => {
              alert('Προστέθηκε νέα έκθεση!');
              loadExhibitions();
              addExForm.reset();
            })
            .catch(err => alert(err));
        });

        function loadExhibitions() {
          fetch('/api/exhibitions')
            .then(res => res.json())
            .then(data => {
              const container = document.getElementById('exhibitions-list');
              let html = `<table border="1">
                <tr><th>ID</th><th>Τίτλος</th><th>Τοποθεσία</th><th>Από</th><th>Έως</th><th>Ενέργειες</th></tr>`;
              data.forEach(ex => {
                html += `
                  <tr>
                    <td>${ex.id}</td>
                    <td contenteditable="true" data-field="title">${ex.title}</td>
                    <td contenteditable="true" data-field="location">${ex.location}</td>
                    <td contenteditable="true" data-field="dateStart">${ex.dateStart}</td>
                    <td contenteditable="true" data-field="dateEnd">${ex.dateEnd}</td>
                    <td>
                      <button data-action="update" data-id="${ex.id}">Αποθήκευση</button>
                      <button data-action="delete" data-id="${ex.id}">Διαγραφή</button>
                    </td>
                  </tr>
                `;
              });
              html += `</table>`;
              container.innerHTML = html;

              container.querySelectorAll('button[data-action]').forEach(btn => {
                btn.addEventListener('click', e => {
                  const action = btn.getAttribute('data-action');
                  const id = btn.getAttribute('data-id');
                  if (action === 'update') {
                    updateExhibitionRow(id, btn);
                  } else if (action === 'delete') {
                    deleteExhibition(id);
                  }
                });
              });
            })
            .catch(err => {
              console.error(err);
              alert('Σφάλμα φόρτωσης εκθέσεων');
            });
        }

        function updateExhibitionRow(exId, btn) {
          const row = btn.closest('tr');
          const tds = row.querySelectorAll('td[contenteditable]');
          let updated = {};
          updated.id = parseInt(exId, 10);
          tds.forEach(td => {
            const field = td.getAttribute('data-field');
            updated[field] = td.innerText.trim();
          });

          fetch(`/api/exhibitions/${exId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify(updated)
          })
            .then(res => {
              if (!res.ok) throw new Error('Update failed');
              return res.json();
            })
            .then(data => {
              alert('Ενημερώθηκε η έκθεση!');
              loadExhibitions();
            })
            .catch(err => alert(err));
        }

        function deleteExhibition(exId) {
          if (!confirm('Σίγουρα θέλετε διαγραφή;')) return;
          fetch(`/api/exhibitions/${exId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': 'Bearer ' + authToken
            }
          })
            .then(res => {
              if (!res.ok) throw new Error('Delete failed');
              return res.json();
            })
            .then(data => {
              alert('Διαγράφηκε η έκθεση!');
              loadExhibitions();
            })
            .catch(err => alert(err));
        }

        // Αρχική φόρτωση λίστας εκθέσεων
        loadExhibitions();
        break;

      // ---------- ΔΙΑΧΕΙΡΙΣΗ ΣΥΝΔΕΣΜΩΝ (CRUD) ----------
      case 'manage-links':
        if (!authToken) {
          mainContent.innerHTML = `<p>Δεν έχετε συνδεθεί ως διαχειριστής.</p>`;
          return;
        }

        mainContent.innerHTML = `
          <h2>Διαχείριση Συνδέσμων</h2>
          <form id="add-link-form">
            <label>Κατηγορία (web, book):</label><br/>
            <input type="text" id="lnCategory" /><br/>
            <label>Τίτλος:</label><br/>
            <input type="text" id="lnTitle" /><br/>
            <label>URL ή ISBN:</label><br/>
            <input type="text" id="lnUrl" /><br/>
            <button type="submit">Προσθήκη</button>
          </form>

          <hr/>
          <h3>Λίστα Συνδέσμων</h3>
          <div id="links-list"></div>
        `;

        const addLinkForm = document.getElementById('add-link-form');
        addLinkForm.addEventListener('submit', e => {
          e.preventDefault();
          const newLink = {
            category: document.getElementById('lnCategory').value,
            title: document.getElementById('lnTitle').value,
            url: document.getElementById('lnUrl').value
          };
          fetch('/api/links', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify(newLink)
          })
            .then(res => {
              if (!res.ok) throw new Error('Error creating link');
              return res.json();
            })
            .then(created => {
              alert('Προστέθηκε νέος σύνδεσμος!');
              loadLinks();
              addLinkForm.reset();
            })
            .catch(err => alert(err));
        });

        function loadLinks() {
          fetch('/api/links')
            .then(res => res.json())
            .then(data => {
              const container = document.getElementById('links-list');
              let html = `<table border="1">
                <tr><th>ID</th><th>Κατηγορία</th><th>Τίτλος</th><th>URL/ISBN</th><th>Ενέργειες</th></tr>`;
              data.forEach(link => {
                html += `
                  <tr>
                    <td>${link.id}</td>
                    <td contenteditable="true" data-field="category">${link.category}</td>
                    <td contenteditable="true" data-field="title">${link.title}</td>
                    <td contenteditable="true" data-field="url">${link.url}</td>
                    <td>
                      <button data-action="update" data-id="${link.id}">Αποθήκευση</button>
                      <button data-action="delete" data-id="${link.id}">Διαγραφή</button>
                    </td>
                  </tr>
                `;
              });
              html += `</table>`;
              container.innerHTML = html;

              container.querySelectorAll('button[data-action]').forEach(btn => {
                btn.addEventListener('click', () => {
                  const action = btn.getAttribute('data-action');
                  const id = btn.getAttribute('data-id');
                  if (action === 'update') {
                    updateLinkRow(id, btn);
                  } else if (action === 'delete') {
                    deleteLink(id);
                  }
                });
              });
            })
            .catch(err => {
              console.error(err);
              alert('Σφάλμα φόρτωσης συνδέσμων');
            });
        }

        function updateLinkRow(linkId, btn) {
          const row = btn.closest('tr');
          const tds = row.querySelectorAll('td[contenteditable]');
          let updated = { id: parseInt(linkId, 10) };
          tds.forEach(td => {
            const field = td.getAttribute('data-field');
            updated[field] = td.innerText.trim();
          });

          fetch(`/api/links/${linkId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify(updated)
          })
            .then(res => {
              if (!res.ok) throw new Error('Update failed');
              return res.json();
            })
            .then(data => {
              alert('Ενημερώθηκε ο σύνδεσμος!');
              loadLinks();
            })
            .catch(err => alert(err));
        }

        function deleteLink(linkId) {
          if (!confirm('Σίγουρα διαγραφή;')) return;
          fetch(`/api/links/${linkId}`, {
            method: 'DELETE',
            headers: {
              'Authorization': 'Bearer ' + authToken
            }
          })
            .then(res => {
              if (!res.ok) throw new Error('Delete failed');
              return res.json();
            })
            .then(data => {
              alert('Διαγράφηκε ο σύνδεσμος!');
              loadLinks();
            })
            .catch(err => alert(err));
        }

        loadLinks();
        break;

      default:
        mainContent.innerHTML = `<p>Δεν βρέθηκε η ενότητα.</p>`;
    }
  }
});
