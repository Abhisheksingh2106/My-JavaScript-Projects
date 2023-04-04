const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )
    if (data.length == 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }

}
addBtn.addEventListener(
    "click",
    function() {
        addNote()
    }
)



// {/* <div class="note">
// <div class="tool">
// <i class="fas fa-save"></i>
//  <i class="fas fa-trash"></i>
// </div>
// <textarea></textarea>
// </div> */}

const addNote = (text = "") => {
        const note = document.createElement("div");
        note.classList.add("note")
        note.innerHTML = `
    <div class="tool">
<i class="save fas fa-save"></i>
 <i class="trash fas fa-trash"></i>
</div>
<textarea>${text}</textarea>
`;

        note.querySelector(".trash").addEventListener(
            "click",
            function() {
                note.remove()
                saveNotes()
            }
        )

        note.querySelector(".save").addEventListener(
            "click",
            function() {
                saveNotes()
            }
        )

        notes.querySelector("textarea").addEventListener(
            "click",
            function() {
                saveNotes()
            }
        )
        main.appendChild(note);
        saveNotes();
    }
    (
        function() {
            const lsnotes = JASON.parse(localStorage.getItem("notes"));
            if (lsNotes === null) {
                addNote()
            } else {
                lsnotes.forEach(
                    (lsNote) => {
                        addNote(lsNote)
                    }
                )
            }

            if (lsNotes.length == 0) {
                localStorage.removeItem("notes")
            } else {
                addNote()
            }
        }
    )()