<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vietchuyen' );

/** MySQL database username */
define( 'DB_USER', 'nghialt' );

/** MySQL database password */
define( 'DB_PASSWORD', 'NghiaLT@#040690' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NH~$vz;rpNJW=Bp7`d>tMf~iI>%w7c!Yya>H i[qkcFOc2bY;7q!!=<})@(F}vun' );
define( 'SECURE_AUTH_KEY',  '$ziS+Mp<4o&vD,pK#fuE=Su)n6y`@2M=L0r:<O.ypg?4}b[,eufahh4N(NGlu37`' );
define( 'LOGGED_IN_KEY',    'mXs{kf, UWYVN0y/SFtG*Le@mo4`QN3dZ~#lTyY9fj<U)`*a.zec}48~yhWG<u~:' );
define( 'NONCE_KEY',        '9T)=,F~z)1iiCp[`5TtUqgM$S8l.wEemjlBJw-yIcI2BKonwTVf9?3-RggC+a.2O' );
define( 'AUTH_SALT',        'm0fx2n}e`M%kp~0jzR3wR/#2_x=[e`.y4*S,yOtFfZKcyw*3j[O#1#C4YaxxhN/8' );
define( 'SECURE_AUTH_SALT', 'o.tHEzRHwZu6k`J5*>.ShCj}VC0J$!x5?E/w$5n)LGf,a(J+0/%nO]Q2B{P3;&=f' );
define( 'LOGGED_IN_SALT',   'J8/,<zsp0L]y@36rI9(+gqrus).?Y{md1(9dd9<3S/skyQu8tTd]1d8)%LNPWfjR' );
define( 'NONCE_SALT',       '[3qjf<Jq1^](Da/oy]u3wGZ;-Pk^OsgBnS]:a^bTm}&:@kPVF}A%Y2FErc@HMVJ~' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_vietchuyen';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
