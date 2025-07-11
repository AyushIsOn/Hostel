# Replit.md - Avni PG Hostel Website

## Overview

This is a full-stack web application for Avni PG Hostel, a premium accommodation service located in Shivaji Nagar, Jhansi, Uttar Pradesh. The application serves as a marketing website showcasing three PG properties (Avni Girls 1, Avni Girls 2, and Avni Boys) with comprehensive information about rooms, amenities, and booking options.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI components with shadcn/ui design system
- **State Management**: TanStack React Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: Hot module replacement with Vite integration

### Development Setup
- **Monorepo Structure**: Shared code between client and server
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Hot Reload**: Integrated Vite development server
- **Error Handling**: Runtime error overlays in development

## Key Components

### Frontend Components
1. **Header**: Navigation with mobile-responsive menu
2. **Hero**: Landing section with call-to-action buttons
3. **Properties**: Cards showcasing the three PG buildings
4. **Location**: Map integration and location details
5. **Rooms**: Display of room types (single, double, triple sharing)
6. **Amenities**: Grid layout of facilities provided
7. **Gallery**: Image galleries for each property
8. **Contact**: Contact information and WhatsApp integration
9. **Footer**: Site navigation and company information

### Backend Infrastructure
1. **Route Registration**: Centralized routing system
2. **Storage Interface**: Abstracted data access layer
3. **Memory Storage**: In-memory storage implementation for development
4. **Request Logging**: Comprehensive API request monitoring

### Database Schema
- **Users Table**: Basic user management with username/password
- **Validation**: Zod schema validation with Drizzle integration
- **Migration System**: Drizzle Kit for database migrations

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: React Query caches and manages server state

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive component library for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide Icons**: Modern icon library
- **Font Awesome**: Additional icons for enhanced UI

### Database and Backend
- **Neon Database**: Serverless PostgreSQL database
- **Drizzle ORM**: Type-safe database toolkit
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the application
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles server code to ES modules
3. **Output Structure**: Separate dist folders for client and server

### Production Setup
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Asset Serving**: Static file serving for production builds
- **Process Management**: Node.js server with proper error handling

### Development Workflow
- **Local Development**: Concurrent client and server development
- **Hot Reload**: Instant updates for both frontend and backend changes
- **Database Migrations**: Drizzle Kit for schema management

## Changelog

```
Changelog:
- July 05, 2025: Initial setup with modern design
- July 05, 2025: Updated design to modern minimalist style with neutral colors
- July 05, 2025: Added authentic photos for Avni Boys gallery section
- July 05, 2025: Added authentic photos for Avni Girls 2 gallery section
- July 05, 2025: Added authentic photos for Avni Girls 1 gallery section
- July 05, 2025: Replaced Google Maps placeholder with actual location map showing all three buildings
- July 05, 2025: Added distance and time information to key places in Jhansi below location section
- July 05, 2025: Added authentic exterior building image to Avni Girls 2 property card
- July 05, 2025: Added authentic building images to Avni Girls 1 and Avni Boys properties, changed aspect ratio to portrait (3:4) to prevent cropping
- July 05, 2025: Made distance to key places section responsive with carousel for mobile and grid for desktop
- July 05, 2025: Major content and functionality updates:
  • Updated hero section title to "Avni PG For Students and Working Professionals"
  • Replaced "Book Your Stay" and "Explore Properties" buttons with "Call Now" and "WhatsApp" buttons
  • Updated properties section description to emphasize same colony location with identical amenities
  • Removed "Choose Your Space" (rooms) section from homepage
  • Enhanced amenities section: added AC (On Demand), updated cleaning services to "Every alternative day", added CCTV cameras
  • Updated amenities description to include "You would only need a pillow and bedsheet - rest all are provided"
  • Added terrace image to Avni Boys gallery showing panoramic city view
  • Added 3-seater room image to Avni Girls 1 gallery with park and mandir access description
  • Implemented comprehensive fraud warning notice above footer alerting users about cyber fraudsters and fake Google Maps listings
- July 06, 2025: Fixed image orientation issues with Avni Girls 2 building photo through 180-degree rotation
- July 06, 2025: Prepared complete GitHub Pages deployment package:
  • Created automated GitHub Actions workflow for deployment
  • Set up WebP image optimization pipeline
  • Configured proper base paths for GitHub Pages hosting
  • Created comprehensive deployment documentation
  • Prepared project for https://github.com/AyushIsOn/AvniPG.git repository
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```