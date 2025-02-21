function skillsMemmber() {
    return {
        skills: ['Javascript', 'React', 'Redux'],
        addSkill(skill) {
            this.skills = [...this.skills, skill]
        }
    }
}