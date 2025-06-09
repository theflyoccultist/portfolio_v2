<h2 style="text-align:center;">PwatSpectrum</h2>

#### PwatSpectrum est un visualiseur audio de terminal en temps réel optimisé par ncurses, PulseAudio, FFTW et par la cafféine. Écrit en C, il s'inspire des soirées clubbing des années 2000. Très performant, élégant et généralement sans fuite de mémoire.

#### [Lien vers le dépôt GitHub](https://github.com/theflyoccultist/pwatspectrum)

- Dossier `ui` :
Contient toute la configuration de la bibliothèque ncurses, y compris l'initialisation de la fenêtre et la configuration des couleurs.

- Dossier `sound` :
Initialise et configure l'entrée et la lecture audio.

- Dossier `processing` :
Nécessaire à la configuration de fftw, ainsi qu'à la fenêtre Hann.

- Fichier `main.c` :
Liaison de ces trois bibliothèques pour l'affichage du spectrogramme sur le terminal.

---

![Aperçu](https://storage.googleapis.com/theflyoccultist/public/images/cli/preview.png)

Compilez simplement avec `make`, puis exécutez le binaire compilé sur votre terminal tout en écoutant de la musique ou d'autres fichiers audio sur votre ordinateur. Vous pouvez exécuter `make clean` pour supprimer automatiquement les binaires.

Vous devrez probablement installer ces bibliothèques pour qu'elles fonctionnent sur votre machine :

```sh
sudo apt-get install libncurses-dev libpulse-dev
```

La bibliothèque FFTW présente dans le gestionnaire de paquets apt est obsolète. Vous devrez donc compiler `fftw-3.3.10.tar.gz` depuis les sources pour obtenir une version plus récente. Vous devrez décompresser l'archive et exécuter `make install`.

Ayant été passionné de musique et d'ingénierie du son avant de me lancer dans la programmation, ce genre de projet était inévitable. D'autres projets liés à l'audio suivront.
