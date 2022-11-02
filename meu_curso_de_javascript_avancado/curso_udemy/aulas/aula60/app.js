function recursiva(max) {
                    // se o número maximo for atingido paro minha função aqui;
    if(max > 10) return;
    max++
    console.log(max)
    recursiva(max)
}

recursiva(0);