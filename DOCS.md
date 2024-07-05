# Application Documentation

Welcome to the documentation for **Tree Visualizer**. This document provides an overview of the application architecture, technologies used, and key functionalities.

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Architecture Overview](#architecture-overview)
4. [Frontend](#frontend)
   - Visualization of Tree
   - State Management
   - UI Design
5. [Backend](#backend)
   - Database
   - Authentication
6. [Conclusion](#conclusion)

## Introduction 

Tree Visualizer is a web application built using Next.js for the frontend and Nest.js for the backend. It features a tree visualization component, optimized for performance by storing the tree structure as a flat array. State management is handled efficiently using Zustand. MongoDB is used as the database for its ease of setup and flexibility. Authentication is implemented using Clerk for OAuth integration. The UI is designed using Tailwind CSS and DaisyUI, offering support for multiple themes.

## Technologies Used

- **Frontend**: Next.js, Zustand
- **Backend**: Nest.js, MongoDB
- **Authentication**: Clerk for OAuth
- **UI Design**: Tailwind CSS, DaisyUI

## Architecture Overview

The application follows a client-server architecture where Next.js serves as the client-side rendering framework and Nest.js as the backend API server. Data is managed and persisted in MongoDB, providing a flexible schema design suitable for storing tree structures efficiently.

## Frontend

### Visualization of Tree

The tree structure within the application is represented as a flat array for optimized operations and simplified database storage. This approach enhances performance and facilitates easier data manipulation.

### State Management

Zustand is utilized for managing application state, offering a simple and fast solution for handling complex state logic across components.

### UI Design

The UI is crafted using Tailwind CSS and DaisyUI, leveraging their extensive utility classes and pre-designed components. This combination allows for rapid UI development and supports various themes out of the box.

## Backend 

### Database

MongoDB is chosen as the backend database due to its ease of setup and scalability. It provides a flexible schema structure that aligns well with storing and querying tree data represented as a flat array.

### Authentication

Clerk is integrated into the application for handling authentication via OAuth. This simplifies user management and authentication processes, ensuring secure access to the application's resources.

## Conclusion

This documentation provides an overview of the technologies, architecture, and key features of **Tree Visualizer**. It serves as a guide for developers and stakeholders to understand the application's structure, functionalities, and implementation details.