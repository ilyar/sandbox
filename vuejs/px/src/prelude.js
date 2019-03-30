if ( typeof process === 'undefined' ) {
    if ( typeof window === 'undefined' ) {
        throw new Error('Ooops ...');
    }
    window.process = { 'env': {} };
}

export {}
