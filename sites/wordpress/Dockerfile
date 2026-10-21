FROM wordpress:7.1.2-php8.3-apache

# Rebuild PHP in place: keep WordPress, Apache configuration, and extension ABI.
# Source checksum: docker-library/php, 8.3/bookworm/apache/Dockerfile.
ENV PHP_VERSION=8.3.36 \
    PHP_URL=https://www.php.net/distributions/php-8.3.36.tar.xz \
    PHP_ASC_URL=https://www.php.net/distributions/php-8.3.36.tar.xz.asc \
    PHP_SHA256=dd54693aa334c5c4d72e9aee96b082c2473750a18a6c1d105789c93a3b1692fd

RUN set -eux; \
    php -r 'exit(PHP_MAJOR_VERSION === 8 && PHP_MINOR_VERSION === 3 ? 0 : 1);'; \
    configureOptions="$(php-config --configure-options)"; \
    savedAptMark="$(apt-mark showmanual)"; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        $PHPIZE_DEPS \
        apache2-dev \
        libargon2-dev \
        libcurl4-openssl-dev \
        libonig-dev \
        libreadline-dev \
        libsodium-dev \
        libsqlite3-dev \
        libssl-dev \
        libxml2-dev \
        zlib1g-dev; \
    docker-php-source delete; \
    curl -fsSL -o /usr/src/php.tar.xz "$PHP_URL"; \
    echo "$PHP_SHA256  /usr/src/php.tar.xz" | sha256sum -c -; \
    docker-php-source extract; \
    cd /usr/src/php; \
    export CFLAGS="$PHP_CFLAGS" CPPFLAGS="$PHP_CPPFLAGS" LDFLAGS="$PHP_LDFLAGS"; \
    eval "./configure $configureOptions"; \
    make -j "$(nproc)"; \
    make install; \
    cd /; \
    docker-php-source delete; \
    apt-mark auto '.*' > /dev/null; \
    apt-mark manual $savedAptMark; \
    find /usr/local /usr/lib/apache2/modules -type f -name '*.so' -exec ldd '{}' ';' \
        | awk '/=>/ { so = $(NF-1); if (index(so, "/usr/local/") == 1) { next }; gsub("^/(usr/)?", "", so); printf "*%s\n", so }' \
        | sort -u \
        | xargs -r env LC_ALL=C dpkg-query --search \
        | awk -F ': ' '!/^diversion / { print $1 }' \
        | sort -u \
        | xargs -r apt-mark manual; \
    apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false; \
    rm -rf /var/lib/apt/lists/*; \
    php -r 'if (PHP_VERSION !== "8.3.36") { exit(1); } foreach (["bcmath", "exif", "gd", "imagick", "intl", "mysqli", "zip", "Zend OPcache"] as $extension) { if (!extension_loaded($extension)) { fwrite(STDERR, "Missing extension: $extension\n"); exit(1); } }'; \
    test -z "$(php -v 2>&1 >/dev/null)"; \
    apache2ctl -t
