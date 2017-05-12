-- CREATE TABLE --
CREATE TABLE Books (
    bookId BIGINT(30) NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    isbn VARCHAR(100) NOT NULL,
    coverLargeUrl VARCHAR(1000) NOT NULL,
    customerReviewRank DOUBLE(10) NOT NULL,
    standardPrice INTEGER(10) NOT NULL,
    saledPrice INTEGER(10),
    PRIMARY KEY(bookId),
    UNIQUE KEY(isbn)
);

CREATE TABLE Users (
    userId BIGINT(30) NOT NULL AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(100) NOT NULL,
    picture VARCHAR(1000),
    PRIMARY KEY(userId)
);

CREATE TABLE BookUserMap (
	bookUserMapId BIGINT(30) NOT NULL AUTO_INCREMENT,
	bookId BIGINT(30) NOT NULL,
	userId BIGINT(30) NOT NULL,
	PRIMARY KEY(bookUserMapId),
	FOREIGN KEY(bookId) REFERENCES Books(bookId) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(userId) REFERENCES Users(userId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Reviews (
    reviewId BIGINT(30) NOT NULL AUTO_INCREMENT,
    bookId BIGINT(30) NOT NULL,
    userId BIGINT(30) NOT NULL,
    star INTEGER(30),
    comment VARCHAR(1000),
    isLike VARCHAR(5) DEFAULT 'false',
    PRIMARY KEY(reviewId),
    FOREIGN KEY(bookId) REFERENCES Books(bookId) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(userId) REFERENCES Users(userId) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Posts (
    postId BIGINT(30) NOT NULL AUTO_INCREMENT,
    title VARCHAR(2000) NOT NULL,
    author VARCHAR(2000) NOT NULL,
    content VARCHAR(2000) NOT NULL,
    postImg VARCHAR(2000),
    releasedDate VARCHAR(100),
 	PRIMARY KEY(postId)
);

CREATE TABLE Genre (
    genreId BIGINT(30) NOT NULL AUTO_INCREMENT,
    name VARCHAR(1000) NOT NULL,
    PRIMARY KEY(genreId)
)

INSERT INTO Genre(name) VALUES
("소설"),
("시/에세이"),
("예술/대중문화"),
("사회과학"),
("역사와 문화"),
("잡지"),
("만화"),
("유아"),
("아동"),
("가정과 생활"),
("청소년"),
("초등학습서"),
("고등학습서"),
("국어/외국어/사전"),
("자연과 과학"),
("경제경영"),
("자기계발"),
("인문"),
("종교/역학"),
("컴퓨터/인터넷"),
("자격서/수험서"),
("취미/레저"),
("전공도서/대학교재"),
("건강/뷰티"),
("여행"),
("중등학습서");
