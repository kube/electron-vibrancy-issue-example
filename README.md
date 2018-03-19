# Electron Vibrancy Test

Minimal example to highlight issue with `setVibrancy` in Electron 2.0.0 beta 4.

The crash happens only when `titleBarStyle` is set to `hidden` or `hiddenInset`.

## Reproduce

```
yarn start
```

Then click in the menu > `Toggle Vibrancy`.
