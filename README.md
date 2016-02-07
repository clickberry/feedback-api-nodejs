# Dockerized Feedback API
Feedback micro-service on Node.js

* [Architecture](#architecture)
* [Technologies](#technologies)
* [Environment Variables](#environment-variables)
* [Events](#events)
* [API](#api)
* [License](#license)

# Architecture
The application is a REST API with messaging service (Bus) dependencies.

# Technologies
* Node.js
* Express.js
* Official nsqjs driver for NSQ messaging service

# Environment Variables
The service should be properly configured with following environment variables.

Key | Value | Description
:-- | :-- | :-- 
NSQD_ADDRESS | bus.yourdomain.com | A hostname or an IP address of the NSQD running instance to publush messages to.
NSQD_PORT | 4150 | A TCP port number of the NSQD running instance to publish messages to.

# Events
The service generates events to the Bus (messaging service) in response to API requests.

## Send events

Topic | Message | Description
:-- | :-- | :--
feedbacks | { name: *user_name*, email: *user_email*, comment: *text* } | Feedbacks.

# API

## POST /
Sends a feedback.

### Request
| Body Param    | Description |
|----------|-------------|
| email    | User email       |
| name | User name    |
| comment | Comment    |

### Response
| HTTP       |  Value                                                             |
|------------|--------------------------------------------------------------------|
| StatusCode | 200                                                |

# License
Source code is under GNU GPL v3 [license](LICENSE).
