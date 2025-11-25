package helpers

import (
	"crypto/rand"
	"encoding/base64"
	"errors"
	"strings"
)

var (
	ErrInvalidToken = errors.New("invalid token format")
)

func GenerateRandomString(length int) (string, error) {
	b := make([]byte, length)
	_, err := rand.Read(b)
	if err != nil {
		return "", err
	}
	return base64.URLEncoding.EncodeToString(b), nil
}

func ParseBearerToken(authHeader string) (string, error) {
	if authHeader == "" {
		return "", ErrInvalidToken
	}

	parts := strings.Split(authHeader, " ")
	if len(parts) != 2 || parts[0] != "Bearer" {
		return "", ErrInvalidToken
	}

	return parts[1], nil
}

func IsValidEmail(email string) bool {
	if len(email) < 3 || len(email) > 254 {
		return false
	}
	return strings.Contains(email, "@") && strings.Contains(email, ".")
}

func Contains(slice []string, item string) bool {
	for _, v := range slice {
		if v == item {
			return true
		}
	}
	return false
}