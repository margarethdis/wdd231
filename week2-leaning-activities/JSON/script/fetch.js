fetch('ward-members.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('familyList');

    const familyName = document.createElement('li');
    familyName.textContent = `Family: ${data.familyName}`;
    list.appendChild(familyName);

    data.members.forEach(member => {
      const li = document.createElement('li');
      li.textContent = `${member.name} - ${member.gender} - Born: ${member.birthdate}`;
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

  