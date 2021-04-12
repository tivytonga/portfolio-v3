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
define( 'DB_NAME', 'portfolio3' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 's3cr3t' );

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
define( 'AUTH_KEY',         '1,y(se<)A;v.P4`ok!6E+eS(Ca!xx&cpr9iu.#l=^PFbIn06>JSuL06fN&-]x0(C' );
define( 'SECURE_AUTH_KEY',  ']B|[N!|}M!?83|`G$pzK%I4r}0mjL=lA^rIHao`tI5NM}v:_CctdQz^uy;)`5O$)' );
define( 'LOGGED_IN_KEY',    'geaMv$~!D9(+f5rXAsKfBk>FmI]q145f]vNpXlRP`.%V;)&<q-SJ0qMq0x$EBlwj' );
define( 'NONCE_KEY',        '.@ML|gU58sZz_hEh+E{LXa#Yju<+g_x}Dvj4IGpP/ovd5:Xd6,wU55Dx/&L$Lp%1' );
define( 'AUTH_SALT',        '(!jY5Gkl(^:(z0@A%DZwH-gRt?h0t(%Tj_XH6X&{1_OD:(p6~5m;%?w`?pL_xVcZ' );
define( 'SECURE_AUTH_SALT', ']L>QS|p~A*MG_wO~O74h@l6yZ63V3QN[kDt4-9#:^(<zbLrx]g$mR4c;1u62@_c0' );
define( 'LOGGED_IN_SALT',   'Wlmk v3_&3L(Q7hb+bQ$U)b1[7[zr?[ZSL&NI^hsn|8_j}dRz(P4oBG.0eAH~8!,' );
define( 'NONCE_SALT',       '?dM~@!FYlkJjks|*j`j4lPp^ JN0)#VsBN*:QQ<Yvcf*mZWz+@*pRredn)KPe-EP' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'p3wp_';

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
