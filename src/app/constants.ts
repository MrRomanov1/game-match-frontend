export class Constants {
    /** site URL */
    static SITE_URL: string = 'http://localhost:4200/';
    static GAME_RECORD_URL: string = Constants.SITE_URL + 'game/';
    static GAME_CATEGORY_URL: string = '/games/';

    /** endpoints */
    static ENDPOINT: string = 'https://game-match-backend.herokuapp.com/'
    static GAME_SERVICE_URL = Constants.ENDPOINT + 'games';
    static GAME_MODE_SERVICE_URL = Constants.ENDPOINT + 'game-modes';
    static GAME_CATEGORY_SERVICE_URL = Constants.ENDPOINT + 'game-categories';
    static GAME_MATCH_SERVICE_URL = Constants.ENDPOINT + 'match';
    static GAMES_BY_CATEGORY_SERVICE_URL = Constants.ENDPOINT + 'games-by-category/';
    static PLATFORMS_SERVICE_URL = Constants.ENDPOINT + 'platforms';

    static GAME_POPULAR_SERVICE_URL = Constants.GAME_SERVICE_URL + '/popular';
    static GAME_HIGH_RATE_SERVICE_URL = Constants.GAME_SERVICE_URL + '/highest-rating';
    static GAMES_NOT_RELEASED_SERVICE_URL = Constants.GAME_SERVICE_URL + '/not-released';

    /** error messages */
    static EMPTY_SEARCH: string = 'Nie znaleziono żadnych tytułów spełniających kryteria wyszukiwania';

    /** dataView component types */
    static POPULAR_DATA_VIEW_TYPE: string = 'popular';
    static COMING_SOON_DATA_VIEW_TYPE: string = 'coming-soon';
    static HIGHEST_RATING_DATA_VIEW_TYPE: string = 'highest-rating';
    static GENERIC_DATA_VIEW_TYPE: string = 'generic'

    /** dataView sort options */
    static HIGH_RATED_DATA_VIEW_SORT: string = 'Najwyżej oceniane';
    static LOW_RATED_DATA_VIEW_SORT: string = 'Najniżej oceniane';
    static MOST_POPULAR_DATA_VIEW_SORT: string = 'Najbardziej popularne';

    /** ToastMessages */
    static ADD_GAME_LOGIN_TOAST: string = 'Aby dodać grę do bazy należy się zalogować'

    /** CSS classes */
    static BUTTON_MATCH_ACTIVE_CLASS: string = 'button-match-active';

    /** entity names */
    static GAME_ENTITY: string = 'Game';
    static GAME_CATEGORY_ENTITY: string = 'GameCategory';
    static GAME_MODE_ENTITY: string = 'GameMode';
    static PLATFORM_ENTITY: string = 'Platform';
}
