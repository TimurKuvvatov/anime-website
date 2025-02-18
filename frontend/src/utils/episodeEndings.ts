export default function getEpisodeEnding(episodes: number): string {
    const lastDigit = episodes % 10;
    const lastTwoDigits = episodes % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return 'эпизодов';
    }

    switch (lastDigit) {
        case 1:
            return 'эпизод';
        case 2:
        case 3:
        case 4:
            return 'эпизода';
        default:
            return 'эпизодов';
    }
}
