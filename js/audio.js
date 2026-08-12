/* ==========================================================================
   Khushi's Love Sanctuary - Audio Engine & Sound Synthesizer
   Romantic Lofi Harmony Synth, Sound FX & Player Controller
   ========================================================================== */

class LoveAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentTrack = 0;
    this.synthInterval = null;
    this.volume = 0.5;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play custom romantic audio synthesizer (Lofi Romantic Chord Progression)
  toggleMusic() {
    this.init();
    if (this.isPlaying) {
      this.stopMusic();
    } else {
      this.startMusic();
    }
    return this.isPlaying;
  }

  startMusic() {
    this.isPlaying = true;
    const notes = [
      [261.63, 329.63, 392.00, 493.88], // C maj7
      [220.00, 261.63, 329.63, 392.00], // A min7
      [174.61, 220.00, 261.63, 329.63], // F maj7
      [196.00, 246.94, 293.66, 349.23]  // G7
    ];
    let step = 0;

    const playChord = () => {
      if (!this.isPlaying) return;
      const currentNotes = notes[step % notes.length];
      currentNotes.forEach((freq, idx) => {
        setTimeout(() => {
          if (this.isPlaying) this.playTone(freq, 2.8, 'sine', 0.12);
        }, idx * 180);
      });
      step++;
    };

    playChord();
    this.synthInterval = setInterval(playChord, 3200);
  }

  stopMusic() {
    this.isPlaying = false;
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  // Play a soft synth tone with envelope
  playTone(freq, duration = 1, type = 'sine', gainVal = 0.1) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainVal * this.volume, this.ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.log('Audio playback error:', e);
    }
  }

  // Sound Effects
  playSparkle() {
    this.init();
    const sparkles = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    sparkles.forEach((f, i) => {
      setTimeout(() => this.playTone(f, 0.4, 'triangle', 0.15), i * 70);
    });
  }

  playPop() {
    this.init();
    this.playTone(400, 0.15, 'sine', 0.2);
  }

  playUnbox() {
    this.init();
    [300, 450, 600, 850, 1200].forEach((f, i) => {
      setTimeout(() => this.playTone(f, 0.5, 'sine', 0.2), i * 90);
    });
  }

  playCheer() {
    this.init();
    [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
      setTimeout(() => this.playTone(f, 0.6, 'sine', 0.18), i * 120);
    });
  }
}

window.loveAudio = new LoveAudioEngine();
